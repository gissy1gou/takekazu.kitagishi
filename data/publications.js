// Single source of truth for the Publications page.
// To add a paper after acceptance: append one object to the relevant section
// array below (mirrors the section structure of assets/kitagishi-cv.pdf).
//
// Two entry shapes are supported (see render-publications.js):
//  - Citation-style (Conference / Journal / Demos and Posters / Workshop
//    Papers / Non-peer-reviewed Publications):
//      { tag?, authors, year, title, venue, doi?, video?, videos?: [{label, url}, ...] }
//      (use `video` for a single link, `videos` when there's more than one,
//      e.g. a short preview and a full-length version)
//  - Simple award/misc entry (Others (Awards etc..)):
//      { title, date, links?: [url, ...] }
//
// NOTE (2026-08-18): rebuilt from assets/kitagishi-cv.pdf ("Last updated:
// May 22, 2026"), which is more complete and current than the old STUDIO
// site listing it replaces (had ICMI 2025, SIGGRAPH Asia 2025, CHI EA '25/'26,
// VRW workshops that the old site was missing).

const PUBLICATIONS = {
  "Conference": [
    {
      authors: "Takekazu Kitagishi, Yuichi Hiroi, Yuna Watanabe, Yuta Itoh, and Jun Rekimoto.",
      year: "",
      title: "“Telextiles: End-to-end Remote Transmission of Fabric Tactile Sensation”.",
      venue: "In The 36th Annual ACM Symposium on User Interface Software and Technology. UIST '23. San Francisco, CA, USA: Association for Computing Machinery, 2023, pp. 1–10. ISBN: 9798400701017.",
      doi: "https://doi.org/10.1145/3586183.3606764",
      videos: [
        { label: "Preview", url: "https://www.youtube.com/watch?v=0y74v7WMPbE" },
        { label: "Full", url: "https://www.youtube.com/watch?v=be8iWmW6AUA" }
      ]
    },
    {
      authors: "Takekazu Kitagishi, Hirotaka Hiraki, Hiromi Nakamura, Yoshio Ishiguro, and Jun Rekimoto.",
      year: "",
      title: "“Pinching Tactile Display: A Cloth that Changes Tactile Sensation by Electrostatic Adsorption”.",
      venue: "In Proceedings of the 2024 International Conference on Advanced Visual Interfaces. AVI '24. Arenzano, Genoa, Italy: Association for Computing Machinery, 2024. ISBN: 9798400717642.",
      doi: "https://doi.org/10.1145/3656650.3656690"
    },
    {
      authors: "Takekazu Kitagishi, Chun Wei Ooi, Yuichi Hiroi, and Jun Rekimoto.",
      year: "",
      title: "“Pinching Visuo-haptic Display: Investigating Cross-Modal Effects of Visual Textures on Electrostatic Cloth Tactile Sensations”.",
      venue: "In Proceedings of the 27th International Conference on Multimodal Interaction. ICMI '25. Canberra, ACT, Australia: Association for Computing Machinery, 2025, pp. 624–633. ISBN: 9798400713958.",
      doi: "https://doi.org/10.1145/3716553.3750810",
      video: "https://www.youtube.com/watch?v=ymZgCh3hDOs"
    },
    {
      authors: "Takekazu Kitagishi, G. Hangli, T. Michikata, and Noboru Koshizuka.",
      year: "",
      title: "“Wi-Monitor: Wi-Fi Channel State Information-Based Crowd Counting with Lightweight and Low-Cost IoT Devices”.",
      venue: "In Internet of Things. GIoTS 2022. Vol. 13533. Lecture Notes in Computer Science. Springer, Cham, 2022, pp. 1–12.",
      doi: "https://doi.org/10.1007/978-3-031-20936-9_11"
    }
  ],

  "Journal": [
    {
      authors: "Takekazu Kitagishi and Daisuke Takagi.",
      year: "",
      title: "“Information and communication technology, educational attainment, and disparity in health information from one's personal social network: The J-SHINE 2017 cross-sectional study”.",
      venue: "In: PLOS ONE 17.9 (2022), e0275285.",
      doi: "https://doi.org/10.1371/journal.pone.0275285"
    }
  ],

  "Demos and Posters": [
    {
      authors: "Michikuni Eguchi, Takekazu Kitagishi, Yuichi Hiroi, and Takefumi Hiraki.",
      year: "",
      title: "“Tactile Data Recording System for Clothing with Motion-Controlled Robotic Sliding”.",
      venue: "In SIGGRAPH Asia 2025 Posters. SA Posters '25. Hong Kong, Hong Kong: Association for Computing Machinery, 2025. ISBN: 9798400713958.",
      doi: "https://doi.org/10.1145/3757374.3771452",
      video: "https://youtu.be/rrpd4tE1vgw"
    },
    {
      authors: "Takekazu Kitagishi, Yuichi Hiroi, Yuna Watanabe, Yuta Itoh, and Jun Rekimoto.",
      year: "",
      title: "“Telextiles: End-to-end Remote Transmission of Fabric Tactile Sensation”.",
      venue: "In Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology. UIST '23 Adjunct. San Francisco, CA, USA: Association for Computing Machinery, 2023. ISBN: 9798400701017.",
      doi: "https://doi.org/10.1145/3586182.3615770"
    },
    {
      authors: "Takekazu Kitagishi, Chun Wei Ooi, and Jun Rekimoto.",
      year: "",
      title: "“Demonstrating Pinching Visuo-haptic Display: A Dynamic Cloth Texturization Via Visually Enhanced Tactile Sensation”.",
      venue: "In Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems. CHI EA '25. Yokohama, Japan: Association for Computing Machinery, 2025. ISBN: 9798400713958.",
      doi: "https://doi.org/10.1145/3706599.3721199"
    },
    {
      authors: "Takekazu Kitagishi, Qing Zhang, and Jun Rekimoto.",
      year: "",
      title: "“Pinching Tactile Display: End-to-End Vibration Transmission for Fabric Tactile Sensation”.",
      venue: "In Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems. CHI EA '26. New York, NY, USA: Association for Computing Machinery, 2026. ISBN: 9798400722813.",
      doi: "https://doi.org/10.1145/3772363.3799072"
    }
  ],

  "Workshop Papers": [
    {
      authors: "Takekazu Kitagishi, Hirotaka Hiraki, Yoshio Ishiguro, and Jun Rekimoto.",
      year: "",
      title: "“Pinching Tactile Display: A Remote Haptic Feedback System for Fabric Texture”.",
      venue: "In 2024 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW). Orlando, FL, USA, 2024, pp. 594–596.",
      doi: "https://doi.org/10.1109/VRW62533.2024.00115"
    },
    {
      authors: "Takekazu Kitagishi, Chun Wei Ooi, and Yuta Itoh.",
      year: "",
      title: "“Pinching Visuo-Haptic Tactile Display: A Dynamic Cloth Texturization Via Visually Enhanced Tactile Sensation”.",
      venue: "In 2025 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW). Saint Malo, France, 2025, pp. 864–866.",
      doi: "https://doi.org/10.1109/VRW69409.2025.00176"
    }
  ],

  "Non-peer-reviewed Publications": [
    {
      authors: "Michikuni Eguchi, Takekazu Kitagishi, Yuichi Hiroi, and Takefumi Hiraki.",
      year: "",
      title: "“Tactile Data Recording System for Clothing with Motion-Controlled Robotic Sliding”.",
      venue: "In The 30th Annual Conference of the Virtual Reality Society of Japan. Osaka, Japan, Sept. 17–19, 2025.",
      doi: null
    },
    {
      authors: "Takekazu Kitagishi, Sai Htaung Kham, Keisuke Yanagi, and Ryosuke Goto.",
      year: "",
      title: "“Detection and Prediction of Fashion Trends: Clustering and Time Series Analysis of SNS Post Data”.",
      venue: "In MIRU2023. Shizuoka, Japan, July 25–29, 2023.",
      doi: null
    },
    {
      authors: "Takekazu Kitagishi, Yuichi Hiroi, Yuna Watanabe, and Yuta Itoh, Jun Rekimoto.",
      year: "",
      title: "“Research on Finding Clothes with Preferred Feel”.",
      venue: "In IIW Poster Session. Tokyo, Japan, Dec. 4, 2023.",
      doi: null
    },
    {
      authors: "Takekazu Kitagishi, Yuichi Hiroi, Yuna Watanabe, Yuta Itoh, and Jun Rekimoto.",
      year: "",
      title: "“Research on Finding Clothes with Preferred Feel”.",
      venue: "In Deep Texture Domain Conference. Aichi, Japan, Sept. 27–29, 2023.",
      doi: null
    }
  ],

  "Others (Awards etc..)": [
    { title: "International Graduate Program of Innovation for Intelligent World (The University of Tokyo)", date: "Selected, May 2023" },
    { title: "Honorable Mention Award, National Data AI Ideathon Preliminary Round", date: "2021" },
    { title: "Excellence Award, National Data AI Ideathon Final Round", date: "2021" },
    { title: "TodaiToTexas Demo Day / Demo Day Award", date: "2021", links: ["https://todaitotexas.com/2021/demoday", "https://wi-monitor.netlify.app/"] },
    { title: "JASSO Scholarship: Partial Repayment Exemption (Half Amount) for Outstanding Achievements", date: "2022" },
    { title: "北岸毅一「Telextiles: 布の触感の遠隔伝送」— 招待講演, 第23回情報科学技術フォーラム (FIT 2024)", date: "2024/9/6", links: ["https://doi.org/10.1145/3586183.3606764"] },
    { title: "東京大学本郷テックガレージ Spring Founders Program", date: "2021", links: ["#"] },
    { title: "GCLS コンペティション 第1回", date: "2020" },
    { title: "GCLS コンペティション 第4回", date: "2023" },
    { title: "知財図鑑", date: "2021" },
    { title: "Master's Program GPA: 4.0 / 4.0（The University of Tokyo）", date: "March 2022" },
    { title: "Ph.D. Program GPA: 4.0 / 4.0（The University of Tokyo）", date: "March 2026" }
  ]
};
