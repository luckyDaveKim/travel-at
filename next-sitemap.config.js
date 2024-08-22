/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://travel-at.vercel.app',
    generateRobotsTxt: true, // robots.txt 생성 여부 (옵션)
    changefreq: 'weekly', // 페이지 업데이트 빈도 (옵션)
    priority: 0.7, // 페이지 우선순위 (옵션)
    sitemapSize: 5000, // 각 sitemap 파일에 포함될 최대 URL 수 (옵션)
    generateIndexSitemap: false // index sitemap 생성 여부 (옵션)
};

module.exports = config;
