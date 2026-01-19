import { navbar, type HopeThemeNavbarItem } from "vuepress-theme-hope";
import fs from "fs";
import path from "path";

const navbarList = navbar([
  {
    text: "首页",
    link: "/",
    icon: "home"
  },
  {
    text: "AI",
    icon: "ai",
    prefix: "/posts/ai/",
    children: [
      {
        text: "AI Coding",
        icon: "openai",
        link: "coding/"
      }
    ],
  },
  {
    text: "语言",
    icon: "code",
    prefix: "/posts/language/",
    children: [
      {
        text: "Python",
        icon: "python",
        link: "python/"
      },
      {
        text: "Vue",
        icon: "vue",
        link: "vue/"
      }
    ],
  },
  {
    text: "框架",
    icon: "frame",
    prefix: "/posts/framework/",
    children: [
      {
        text: "django",
        icon: "django",
        link: "django/"
      },
      {
        text: "scrapy",
        icon: "spider",
        link: "scrapy/"
      },
      {
        text: "apscheduler",
        icon: "python",
        link: "apscheduler/"
      },
      {
        text: "fastapi",
        icon: "fastapi",
        link: "fastapi/"
      }
    ],
  },
  {
    text: "杂项",
    icon: "other",
    prefix: "/posts/other/",
    children: [
      {
        text: "git",
        icon: "git",
        link: "git/"
      },
      {
        text: "docker",
        icon: "docker",
        link: "docker/"
      },
      {
        text: "开源",
        icon: "github",
        link: "opensource/"
      },
      {
        text: "阅读",
        icon: "read-fill",
        link: "read/"
      },
      {
        text: "1loc",
        icon: "javascript",
        link: "1loc/"
      },
      {
        text: "其他",
        icon: "other",
        link: ""
      }
    ]
  },
  {
    text: "开源项目",
    icon: "github",
    children: [
      {
        text: "usepy",
        link: "https://usepy.code05.com/"
      },
      {
        text: "onestep",
        link: "https://onestep.code05.com/"
      },
      {
        text: "nacos",
        link: "https://nacos.code05.com/"
      },
      {
        text: "notify",
        link: "https://notify.code05.com/"
      },
    ]
  },
  {
    text: "编程参考",
    link: "https://reference.52caiji.com/",
    icon: "code"
  }
]);

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  const tempPath = path.resolve(__dirname, "../posts/_temp");
  if (fs.existsSync(tempPath)) {
    const tempFiles = fs.readdirSync(tempPath);
    const children: HopeThemeNavbarItem[] = [];
    tempFiles.forEach((file: string) => {
      const name = file.replace(".md", "");
      children.push({
        text: name,
        icon: "git",
        link: name
      });
    });
    navbarList.push(
      {
        text: "未发布博文",
        icon: "other",
        prefix: "/posts/_temp/",
        children
      }
    );
  }
}

export default navbarList;
