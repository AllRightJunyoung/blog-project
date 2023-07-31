/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.BLOG_URI}`,
  generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
  sitemapSize: 7000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
  changefreq: "daily", // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
  priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
  exclude: ["/server-sitemap.xml"],

  robotsTxtOptions: {
    // 정책 설정
    policies: [
      {
        userAgent: "*", // 모든 agent 허용
        allow: "/",
      },
    ],
    additionalSitemaps: [`${process.env.BLOG_URI}/server-sitemap.xml`],
  },
};