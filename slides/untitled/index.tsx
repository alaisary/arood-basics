import type { Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = { title: "Untitled", createdAt: "2026-10-24T18:57:09.221Z" };

const Blank: Page = () => <div style={{ width: '100%', height: '100%', background: '#ffffff' }} />;

export default [Blank] satisfies Page[];
