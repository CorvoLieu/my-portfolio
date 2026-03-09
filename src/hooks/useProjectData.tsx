import { useTranslations, type LangType } from "@/i18n/utils";
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
        "Designed and developed a personal portfolio website using Astro, React, and Tailwind CSS. Implemented responsive design principles to ensure optimal viewing across devices. Integrated internationalization (i18n) support for English and Vietnamese languages, allowing users to switch between languages seamlessly. Deployed the website on Vercel for fast and reliable hosting.",
      ),
      link: "https://github.com/CorvoLieu/my-porfolio",
      technologies: ["Astro", "React", "Tailwind CSS", "NPM", "Vercel", "TypeScript"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.FRONTEND, tagKeys.PUBLIC],
    },
    {
      title: t("projects.personalDedicatedServer.title", "Personal Dedicated Server"),
      role: "DevOps Engineer",
      description: t(
        "projects.personalDedicatedServer.description",
        "Set up and maintained a personal dedicated server for hosting various applications and services (Minecraft Server, 3D Printer Controller). Configured the server with necessary software and security measures to ensure optimal performance and protection against potential threats. Regularly monitored server performance and implemented updates and optimizations as needed.",
      ),
      link: "https://github.com/CorvoLieu/my-personal-server",
      technologies: ["Proxmox", "Docker", "Caddy", "Minecraft Server", "OctoPrint"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.PRIVATE],
    },
    {
      title: t("projects.githubCICD.title", "Github CI/CD Pipeline for Serverless Application"),
      role: "DevOps Engineer",
      description: t(
        "projects.githubCICD.description",
        "Implemented a CI/CD pipeline for a serverless application using Bitbucket Pipeline. Automated the build and deployment processes to improve development efficiency and reduce time-to-market. Collaborated with development teams to troubleshoot and optimize the pipeline for better performance.",
      ),
      link: "[Private Repository]",
      technologies: ["Git", "Bitbucket Pipeline", "GCP", "GAE", "Google Cloud Run"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.AUTOMATION, tagKeys.PRIVATE],
    },
    {
      title: t("projects.staticLandingPage.title", "Static Landing Page Website"),
      role: "DevOps Engineer & Frontend Developer",
      description: t(
        "projects.staticLandingPage.description",
        "Designed and developed a static landing page website using Astro, React, and Tailwind CSS. Working closely with marketing team to ensure brand consistency. Implemented responsive design principles to ensure optimal viewing across devices. Deployed the website on Vercel for fast and reliable hosting.",
      ),
      link: "[Private Repository]",
      technologies: ["Astro", "React", "Tailwind CSS", "NPM", "Vercel", "TypeScript"],
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
        "Designed and implemented an internal network accessing system using Netbird. Configured Netbird server to allow secure remote access to internal resources. Set up client configurations for team members to connect to the internal network securely. Implemented monitoring and logging mechanisms to ensure the security and reliability of the VPN connection.",
      ),
      link: "[Private Repository]",
      technologies: ["Netbird", "Linux", "Networking"],
      tags: [tagKeys.CLOUD_INFRAS, tagKeys.PRIVATE],
    },
    {
      title: t("projects.uptimeMonitoringSystem.title", "Uptime Monitoring System"),
      role: "DevOps Engineer",
      description: t(
        "projects.uptimeMonitoringSystem.description",
        "Designed and implemented an uptime monitoring system using Prometheus and Grafana. Set up Prometheus to scrape metrics from various services and endpoints. Created custom Grafana dashboards for real-time visualization of uptime and performance metrics. Implemented alerting rules in Prometheus to notify the team of any downtime or performance degradation.",
      ),
      link: "[Private Repository]",
      technologies: [
        "Google Cloud Monitoring",
        "Google Cloud Alerting",
        "GCP Logging",
        "GCP Dashboards",
      ],
      tags: [tagKeys.LOGGING, tagKeys.PRIVATE],
    },
    {
      title: t("projects.logMonitoringSystem.title", "Log Monitoring System"),
      role: "DevOps Engineer",
      description: t(
        "projects.logMonitoringSystem.description",
        "Designed and mainstreamed a log monitoring system using the Grafana. Set up log collection and processing pipelines to aggregate logs from various sources. Created custom dashboards for real-time log visualization and analysis. Implemented alerting mechanisms to notify the team of critical issues based on log patterns.",
      ),
      link: "[Private Repository]",
      technologies: ["Grafana Alloy", "Grafana", "Loki"],
      tags: [tagKeys.LOGGING, tagKeys.PRIVATE],
    },
  ];

  const getProjectsByTags = (...tags: tagKeys[]) => {
    return allProjects.filter((project) => tags.some((tag) => project.tags?.includes(tag))) || [];
  };

  return { allProjects, getProjectsByTag: getProjectsByTags };
};

export default useProjectData;
