import { supabase } from "@/lib/supabaseClient";

export type CampaignPanelContent = {
  label: string;
  title: string;
  title_accent: string | null;
  title_main: string | null;
  body: string;
  middle_content: string;
  lower_text: string;
  button_label: string;
  button_url: string;
  is_live: boolean;
  starts_at: string | null;
  ends_at: string | null;
};

export type NoticeboardItemContent = {
  title: string;
  label: string;
  body: string;
  button_label: string;
  button_url: string;
  category: string;
  accent_colour: string;
  is_live: boolean;
  display_order: number;
  starts_at: string | null;
  ends_at: string | null;
  created_at?: string | null;
};

function isCurrent(startsAt?: string | null, endsAt?: string | null) {
  const now = Date.now();
  const starts = startsAt ? new Date(startsAt).getTime() : null;
  const ends = endsAt ? new Date(endsAt).getTime() : null;

  return (!starts || starts <= now) && (!ends || ends >= now);
}

export async function getHomepageContent() {
  const [campaignResult, noticeboardResult] = await Promise.all([
    supabase
      .from("campaign_panel")
      .select("label,title,title_accent,title_main,body,middle_content,lower_text,button_label,button_url,is_live,starts_at,ends_at")
      .eq("is_live", true)
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("noticeboard_items")
      .select("title,label,body,button_label,button_url,category,accent_colour,is_live,display_order,starts_at,ends_at,created_at")
      .eq("is_live", true)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false })
      .limit(12),
  ]);

  const campaign = campaignResult.error
    ? undefined
    : ((campaignResult.data || []) as CampaignPanelContent[]).find((item) =>
        isCurrent(item.starts_at, item.ends_at),
      ) || null;

  const noticeboardItems = noticeboardResult.error
    ? undefined
    : ((noticeboardResult.data || []) as NoticeboardItemContent[])
        .filter((item) => isCurrent(item.starts_at, item.ends_at))
        .slice(0, 3);

  if (campaignResult.error) {
    console.error("Could not load homepage campaign", campaignResult.error);
  }

  if (noticeboardResult.error) {
    console.error("Could not load homepage noticeboard", noticeboardResult.error);
  }

  return {
    campaign,
    campaignError: campaignResult.error,
    noticeboardError: noticeboardResult.error,
    noticeboardItems,
  };
}
