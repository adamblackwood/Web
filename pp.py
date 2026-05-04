import os

# 1. تحديث ملف package.json (إضافة autoprefixer)
package_json_fixed = """{
  "name": "abdullah-nabil-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.2.10",
    "lucide-react": "^0.395.0",
    "next": "14.2.4",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1"
  }
}"""

# 2. التأكد من ملف postcss.config.js
postcss_config = """module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};"""

def fix_project():
    print("🛠️ بدء إصلاح ملفات المشروع...")
    
    # تحديث package.json
    with open("package.json", "w", encoding="utf-8") as f:
        f.write(package_json_fixed.strip())
    print("✅ تم تحديث ملف package.json بنجاح.")

    # تحديث postcss.config.js
    with open("postcss.config.js", "w", encoding="utf-8") as f:
        f.write(postcss_config.strip())
    print("✅ تم التأكد من ملف postcss.config.js.")

    print("\n🚀 الآن قم برفع هذه التغييرات إلى GitHub وسيعمل Cloudflare تلقائياً!")

if __name__ == "__main__":
    fix_project()
