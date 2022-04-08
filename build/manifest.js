export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/freude.woff2","fonts/urbane-rounded-bold.woff2","fonts/urbane-rounded-demibold.woff2","fonts/urbane-rounded.woff2","images/ameliden.png","images/backgrounds/bg_dots.jpg","images/backgrounds/bg_dots.svg","images/backgrounds/blue_stripes.png","images/backgrounds/blue_stripes.svg","images/backgrounds/cosmic tiled bg.jpg","images/backgrounds/the_gracie_pattern.png","images/borders/benday.svg","images/borders/benday_c4.svg","images/borders/benday_c5.svg","images/borders/benday_inverted.svg","images/borders/benday_pink.svg","images/borders/blue_dot.svg","images/borders/clouds.svg","images/borders/white_dot.svg","images/design_portfolio/Halo cover art.jpg","images/design_portfolio/Kawaii face_void eon.jpg","images/design_portfolio/acr_logo.jpg","images/design_portfolio/amy_logo.jpg","images/design_portfolio/bday card.jpg","images/design_portfolio/belgium_logo.jpg","images/design_portfolio/belgium_logo_1.jpg","images/design_portfolio/bread momma candy.jpg","images/design_portfolio/bread momma_logo.jpg","images/design_portfolio/buffalofish_logo.jpg","images/design_portfolio/chocolate_liquor.jpg","images/design_portfolio/cloud_castle_logo.jpg","images/design_portfolio/friend hunters_logo.jpg","images/design_portfolio/gbell_icon.jpg","images/design_portfolio/goo resort.jpg","images/design_portfolio/gooden_logo.jpg","images/design_portfolio/gracie bell_logo.jpg","images/design_portfolio/ivory spread.jpg","images/design_portfolio/momo_banner.jpg","images/design_portfolio/pv_logo.jpg","images/design_portfolio/rute_logo.jpg","images/design_portfolio/shortcake_logo.jpg","images/favicons/favicon.png","images/favicons/favicon.svg","images/gbell_social_image.jpg","images/grace.jpg","images/grace2.jpg","images/grace3.jpg","images/gracie4.png","images/gracie_pfp.png","images/icons/b_arrow.svg","images/icons/b_at.svg","images/icons/b_back.svg","images/icons/b_book.svg","images/icons/b_brush.svg","images/icons/b_close.svg","images/icons/b_code.svg","images/icons/b_github.svg","images/icons/b_github_c2.svg","images/icons/b_image.svg","images/icons/b_logo.svg","images/icons/b_logo_c2.svg","images/icons/b_money.svg","images/icons/b_music.svg","images/icons/b_next.svg","images/icons/b_next_c2.svg","images/icons/b_prev.svg","images/icons/b_prev_c2.svg","images/icons/b_shapes.svg","images/icons/b_soundcloud.svg","images/icons/b_soundcloud_c2.svg","images/icons/b_star.svg","images/icons/b_twitter.svg","images/icons/b_twitter_c2.svg","images/icons/b_video.svg","images/icons/b_youtube.svg","images/icons/b_youtube_c2.svg","images/icons/loading.svg","images/logo.svg","images/logo_no_cloud.svg","images/ponycide_c_9 12 20_gracie chibi.png","images/thumbs/comms/bg_detailed.jpg","images/thumbs/comms/bg_photo.jpg","images/thumbs/comms/bg_simple.jpg","images/thumbs/comms/render_flat.jpg","images/thumbs/comms/render_shaded.jpg","images/thumbs/comms/render_sketch.jpg","images/thumbs/comms/view_closeup.jpg","images/thumbs/comms/view_medium.jpg","images/thumbs/comms/view_wide.jpg","images/thumbs/comms/xtra_graphic_design.jpg","images/thumbs/comms/xtra_other_ideas.png","images/thumbs/comms/xtra_ref.jpg","images/thumbs/comms/xtra_stickers.jpg","images/thumbs/comms/xtra_vector_face.jpg","posts/art/61845c3000791aac8e498e7c.jpg","posts/art/61845c30028b9225248bd74c.jpg","posts/art/61845c300af5faa65fc6c2fe.jpg","posts/art/61845c300b39a7ee83cb873e.jpg","posts/art/61845c300c1945684721d6f1.jpg","posts/art/61845c300da8a10baf51ef55.jpg","posts/art/61845c30155bcdb6c3753b5c.jpg","posts/art/61845c3016888e38f14759a7.jpg","posts/art/61845c3017cb9a213f45c766.jpg","posts/art/61845c301bd4749b20bd7d1e.jpg","posts/art/61845c30230da9e328775f21.jpg","posts/art/61845c30272191618654bff7.jpg","posts/art/61845c3029ecc1c4cd8f32d1.jpg","posts/art/61845c302a9c86dcd1d98e5e.jpg","posts/art/61845c30303cf4bdfd03009f.jpg","posts/art/61845c30322c14cab7bcef2e.jpg","posts/art/61845c3036409fa06a12e002.jpg","posts/art/61845c3036fa3ab00dad21ca.jpg","posts/art/61845c303bb3bdaf83765287.jpg","posts/art/61845c303fb3222a0db1a518.jpg","posts/art/61845c30469b14b005bc7ad3.jpg","posts/art/61845c304976a424a5010135.jpg","posts/art/61845c304f36954232099d56.jpg","posts/art/61845c3050eaac4833776b58.jpg","posts/art/61845c3059678eaf3ae6a2cd.jpg","posts/art/61845c305a6bc4d97e9c9666.jpg","posts/art/61845c305f5c84325ae31e72.jpg","posts/art/61845c30603fa6c34043a91f.jpg","posts/art/61845c306ba7c580013ae635.jpg","posts/art/61845c3077178c2a69267eb6.jpg","posts/art/61845c307a734ce7d765db11.jpg","posts/art/61845c307c0b7b471b1ac62c.jpg","posts/art/61845c307d56f19985c7397e.jpg","posts/art/61845c30812e950d616beea2.jpg","posts/art/61845c30832283c0e5dc328c.jpg","posts/art/61845c308836d3e688856863.jpg","posts/art/61845c308b27167c434ba69b.jpg","posts/art/61845c309302aee933bf45ca.jpg","posts/art/61845c309ba509e536ad2830.jpg","posts/art/61845c30a0b991f6a54d4d11.jpg","posts/art/61845c30a3b198ca927e19cc.jpg","posts/art/61845c30ab4260f31b5bae37.jpg","posts/art/61845c30b61435ca3bd05337.jpg","posts/art/61845c30bd89749b397c591a.jpg","posts/art/61845c30bfbb93f82837214c.jpg","posts/art/61845c30c2a72dfaba5fe1ba.jpg","posts/art/61845c30c4251c62d92d01a9.jpg","posts/art/61845c30c56744256797d5cb.jpg","posts/art/61845c30cd407216f7315f57.jpg","posts/art/61845c30d357e3793acb5500.jpg","posts/art/61845c30da0ed409ae41e785.jpg","posts/art/61845c30e2361e9d09413913.jpg","posts/art/61845c30e240194ccd05270d.jpg","posts/art/61845c30e3abb65e3cdb7277.jpg","posts/art/61845c30e3d071279b4346ce.jpg","posts/art/61845c30e5c594a716185a45.jpg","posts/art/61845c30e86f619ac862bf75.jpg","posts/art/61845c30f22f20976be10858.jpg","posts/art/61845c30f29b12b1b340c8ec.jpg","posts/art/61845c30f2a6a798e5611878.jpg","posts/art/61845c30f2c36a758edd6d77.jpg","posts/art/61845c30f84e48174c38938c.jpg","posts/art/61845c30fbd716944510b42d.jpg","posts/art/61845c31dae3dab9840894c6.jpg","posts/art/thumbs/61845c3000791aac8e498e7c.jpg","posts/art/thumbs/61845c30028b9225248bd74c.jpg","posts/art/thumbs/61845c300af5faa65fc6c2fe.jpg","posts/art/thumbs/61845c300b39a7ee83cb873e.jpg","posts/art/thumbs/61845c300c1945684721d6f1.jpg","posts/art/thumbs/61845c300da8a10baf51ef55.jpg","posts/art/thumbs/61845c30155bcdb6c3753b5c.jpg","posts/art/thumbs/61845c3016888e38f14759a7.jpg","posts/art/thumbs/61845c3017cb9a213f45c766.jpg","posts/art/thumbs/61845c301bd4749b20bd7d1e.jpg","posts/art/thumbs/61845c30230da9e328775f21.jpg","posts/art/thumbs/61845c30272191618654bff7.jpg","posts/art/thumbs/61845c3029ecc1c4cd8f32d1.jpg","posts/art/thumbs/61845c302a9c86dcd1d98e5e.jpg","posts/art/thumbs/61845c30303cf4bdfd03009f.jpg","posts/art/thumbs/61845c30322c14cab7bcef2e.jpg","posts/art/thumbs/61845c3036409fa06a12e002.jpg","posts/art/thumbs/61845c3036fa3ab00dad21ca.jpg","posts/art/thumbs/61845c303bb3bdaf83765287.jpg","posts/art/thumbs/61845c303fb3222a0db1a518.jpg","posts/art/thumbs/61845c30469b14b005bc7ad3.jpg","posts/art/thumbs/61845c304976a424a5010135.jpg","posts/art/thumbs/61845c304f36954232099d56.jpg","posts/art/thumbs/61845c3050eaac4833776b58.jpg","posts/art/thumbs/61845c3059678eaf3ae6a2cd.jpg","posts/art/thumbs/61845c305a6bc4d97e9c9666.jpg","posts/art/thumbs/61845c305f5c84325ae31e72.jpg","posts/art/thumbs/61845c30603fa6c34043a91f.jpg","posts/art/thumbs/61845c306ba7c580013ae635.jpg","posts/art/thumbs/61845c3077178c2a69267eb6.jpg","posts/art/thumbs/61845c307a734ce7d765db11.jpg","posts/art/thumbs/61845c307c0b7b471b1ac62c.jpg","posts/art/thumbs/61845c307d56f19985c7397e.jpg","posts/art/thumbs/61845c30812e950d616beea2.jpg","posts/art/thumbs/61845c30832283c0e5dc328c.jpg","posts/art/thumbs/61845c308836d3e688856863.jpg","posts/art/thumbs/61845c308b27167c434ba69b.jpg","posts/art/thumbs/61845c309302aee933bf45ca.jpg","posts/art/thumbs/61845c309ba509e536ad2830.jpg","posts/art/thumbs/61845c30a0b991f6a54d4d11.jpg","posts/art/thumbs/61845c30a3b198ca927e19cc.jpg","posts/art/thumbs/61845c30ab4260f31b5bae37.jpg","posts/art/thumbs/61845c30b61435ca3bd05337.jpg","posts/art/thumbs/61845c30bd89749b397c591a.jpg","posts/art/thumbs/61845c30bfbb93f82837214c.jpg","posts/art/thumbs/61845c30c2a72dfaba5fe1ba.jpg","posts/art/thumbs/61845c30c4251c62d92d01a9.jpg","posts/art/thumbs/61845c30c56744256797d5cb.jpg","posts/art/thumbs/61845c30cd407216f7315f57.jpg","posts/art/thumbs/61845c30d357e3793acb5500.jpg","posts/art/thumbs/61845c30da0ed409ae41e785.jpg","posts/art/thumbs/61845c30e2361e9d09413913.jpg","posts/art/thumbs/61845c30e240194ccd05270d.jpg","posts/art/thumbs/61845c30e3abb65e3cdb7277.jpg","posts/art/thumbs/61845c30e3d071279b4346ce.jpg","posts/art/thumbs/61845c30e5c594a716185a45.jpg","posts/art/thumbs/61845c30e86f619ac862bf75.jpg","posts/art/thumbs/61845c30f22f20976be10858.jpg","posts/art/thumbs/61845c30f29b12b1b340c8ec.jpg","posts/art/thumbs/61845c30f2a6a798e5611878.jpg","posts/art/thumbs/61845c30f2c36a758edd6d77.jpg","posts/art/thumbs/61845c30f84e48174c38938c.jpg","posts/art/thumbs/61845c30fbd716944510b42d.jpg","posts/art/thumbs/61845c31dae3dab9840894c6.jpg","posts/blog/61845c30e86f619ac862bf75.md","posts/music/61845c30155bcdb6c3753b5c.jpg","posts/music/61845c30155bcdb6c3753b5c.mp3"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml",".md":"text/markdown",".mp3":"audio/mpeg"},
	_: {
		entry: {"file":"start-ce19cb5d.js","js":["start-ce19cb5d.js","chunks/vendor-acddcd82.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "comics",
				pattern: /^\/comics\/?$/,
				names: [],
				types: [],
				path: "/comics",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "design",
				pattern: /^\/design\/?$/,
				names: [],
				types: [],
				path: "/design",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "comms",
				pattern: /^\/comms\/?$/,
				names: [],
				types: [],
				path: "/comms",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/grabble/post",
				pattern: /^\/api\/grabble\/post\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/grabble/post/index.js')
			},
			{
				type: 'endpoint',
				id: "api/grabble/get",
				pattern: /^\/api\/grabble\/get\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/grabble/get/index.js')
			},
			{
				type: 'endpoint',
				id: "api/grabble/get/count",
				pattern: /^\/api\/grabble\/get\/count\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/grabble/get/count.js')
			},
			{
				type: 'endpoint',
				id: "api/grabble/get/[id]",
				pattern: /^\/api\/grabble\/get\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				load: () => import('./server/entries/endpoints/api/grabble/get/_id_.js')
			},
			{
				type: 'page',
				id: "art",
				pattern: /^\/art\/?$/,
				names: [],
				types: [],
				path: "/art",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
