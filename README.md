# أساسيات في علم العروض — open-slide deck

Slide deck for **أ. أسماء الحارثية**, مدرسة سمية للتعليم ما بعد الأساسي (١٠–١٢), built with [open-slide](https://www.npmjs.com/package/@open-slide/core).

## Run locally

```sh
npm install
npm run dev
```

Then open <http://localhost:5173/s/arood-basics>. On Windows, double-click `▶ تشغيل العرض.bat` instead.

## Deploy (Cloudflare Pages)

```sh
sh deploy/build.sh
npx wrangler pages deploy dist --project-name arood-basics
```

Hosted deck: `https://arood-basics.pages.dev/s/arood-basics`

## Folders

- `slides/` — the deck source (`arood-basics`)
- `1- العرض الأصلي (PowerPoint)` — original PowerPoint and slide images
- `2- الأنشطة الورقية` — printable activities (PDF)
- `3- الصور والفيديو` — bahr illustrations and the lesson video
- `4- ملفات مساعدة` — scanned tafā‘īl table and image-generation prompts
