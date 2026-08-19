// Single source of truth for the News page.
// To add an item: append one object to NEWS below (newest first).
// Shape: { date, text, link?, linkLabel? } — link/linkLabel add an
// optional link after the text (e.g. a press release), see render-news.js.
//
// NOTE (2026-08-18): the original STUDIO site only listed 2 items (Oct. 2023,
// May 2022) even though its own Publications page already had 2024 entries —
// News and Publications were maintained by hand and had drifted apart. The
// entries above those two were back-filled from the CV
// (assets/kitagishi-cv.pdf); IEEE VR 2024/2025 (Workshop Papers) are still
// missing from News.

const NEWS = [
  {
    date: "Jul. 2026",
    text: "Announced a joint research project between ZOZO NEXT and the University of Tsukuba's Digital Nature Development Research Center (Yoichi Ochiai Laboratory) on searching for clothing using onomatopoeia and other sensory expressions (e.g. \"sarasara\", \"mokomoko\").",
    link: "https://zozonext.com/news/20260709_zozoresearch",
    linkLabel: "Press release (ZOZO NEXT)"
  },
  {
    date: "Apr. 2026",
    text: "One paper accepted to the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '26)."
  },
  {
    date: "Dec. 2025",
    text: "One poster accepted to SIGGRAPH Asia 2025 Posters."
  },
  {
    date: "Oct. 2025",
    text: "One paper accepted to the 27th International Conference on Multimodal Interaction (ICMI '25)."
  },
  {
    date: "Feb. 2025",
    text: "Announced a joint research project between ZOZO NEXT, The University of Tokyo (Rekimoto Laboratory), and Cluster, Inc. on measuring and quantifying the comfort of wearing clothes, aiming to let people search for their preferred feel when shopping online.",
    link: "https://www.iii.u-tokyo.ac.jp/news/2025020721997",
    linkLabel: "Press release (UTokyo)"
  },
  {
    date: "Jun. 2024",
    text: "One paper accepted to the 2024 International Conference on Advanced Visual Interfaces (AVI '24)."
  },
  {
    date: "Oct. 2023",
    text: "One paper accepted to the ACM Symposium on User Interface Software and Technology (UIST '23)."
  },
  {
    date: "May 2022",
    text: "One paper accepted to the 2022 Global Internet of Things Summit (GIoTS)."
  }
];
