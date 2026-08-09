import { useTranslations, type LangType } from "@/i18n/server";
import { tagKeys } from "@/lib/tags";
import type { ProjectProps } from "@lib/props";

const useProjectData = (lang: LangType) => {
  const { t } = useTranslations(lang);

  const allProjects: ProjectProps[] = [
    {
      title: t("projects.personalPortfolio.title", "Personal Portfolio"),
      role: "Full Stack Engineer",
      description: t(
        "projects.personalPortfolio.description",
        "Designed, developed, and deployed a personal portfolio website. Integrated internationalization <em>(i18n)</em> support for English and Vietnamese languages. Deployed the website on Cloudflare Pages for fast and reliable hosting.",
      ),
      link: "https://github.com/CorvoLieu/my-porfolio",
      technologies: [
        "Astro",
        "React",
        "Tailwind CSS",
        "NPM",
        "Cloudflare Pages",
        "TypeScript",
      ],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.FRONTEND, tagKeys.PUBLIC],
    },
    {
      title: t(
        "projects.personalDedicatedServer.title",
        "Personal Dedicated Server",
      ),
      role: "DevOps Engineer",
      description: t(
        "projects.personalDedicatedServer.description",
        "Set up and maintained a personal dedicated server for hosting personal projects (Minecraft Server, 3D Printer Controller). Utilized <em>private networking</em> via Tailscale and Docker for efficient <em>resource management and isolation</em>.",
      ),
      link: "https://github.com/CorvoLieu/my-personal-server",
      technologies: ["Proxmox", "Docker", "Caddy", "Tailscale"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.PRIVATE],
    },
    {
      title: t(
        "projects.githubCICD.title",
        "Github CI/CD Pipeline for Serverless Application",
      ),
      role: "DevOps Engineer",
      description: t(
        "projects.githubCICD.description",
        "Implemented a CI/CD pipeline for a serverless application using <em>Bitbucket Pipeline</em>. Automated the build and deployment processes to improve development speed by <em>30%</em> and reduce time-to-market. Collaborated with development teams to troubleshoot and optimize the pipeline for better performance.",
      ),
      link: "[Private Repository]",
      technologies: [
        "Git",
        "Bitbucket Pipeline",
        "GCP",
        "GAE",
        "Google Cloud Run",
      ],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.AUTOMATION, tagKeys.PRIVATE],
    },
    {
      title: t(
        "projects.staticLandingPage.title",
        "Static Landing Page Website",
      ),
      role: "DevOps Engineer & Frontend Developer",
      description: t(
        "projects.staticLandingPage.description",
        "Designed and developed a static landing page website. Created corresponding custom <em>internal tools</em> for blog management. Working closely with marketing team to ensure brand consistency. Deployed the website on <em>Cloudflare Pages</em> for fast and reliable hosting.",
      ),
      link: "[Private Repository]",
      technologies: [
        "Astro",
        "React",
        "Tailwind CSS",
        "NPM",
        "Cloudflare Pages",
        "TypeScript",
      ],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.FRONTEND, tagKeys.PRIVATE],
    },
    {
      title: t(
        "projects.internalNetworkAccessingSystem.title",
        "Internal Network Accessing System",
      ),
      role: "DevOps Engineer",
      description: t(
        "projects.internalNetworkAccessingSystem.description",
        "Designed and implemented an internal network accessing system using Netbird. Configured Netbird server to allow <em>secure remote access</em> to internal resources. Implemented monitoring and logging mechanisms to ensure the security and reliability of the VPN connection.",
      ),
      link: "[Private Repository]",
      technologies: ["Netbird", "Networking"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.PRIVATE],
    },
    {
      title: t("projects.logMonitoringSystem.title", "Log Monitoring System"),
      role: "DevOps Engineer",
      description: t(
        "projects.logMonitoringSystem.description",
        "Designed and mainstreamed a log monitoring system using Grafana. Set up log collection and processing pipelines to aggregate logs from various sources. Created custom dashboards for real-time <em>log visualization and analysis</em>. Implemented alerting mechanisms to notify the team of critical issues based on log patterns.",
      ),
      link: "[Private Repository]",
      technologies: ["Grafana Alloy", "Grafana", "Loki"],
      tags: [tagKeys.LOGGING, tagKeys.PRIVATE],
    },
  ];

  const getProjectsByTags = (...tags: tagKeys[]) => {
    return (
      allProjects.filter((project) =>
        tags.some((tag) => project.tags?.includes(tag)),
      ) || []
    );
  };

  return { allProjects, getProjectsByTag: getProjectsByTags };
};

export default useProjectData;
