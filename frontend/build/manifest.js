export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.ico","fonts/freude.woff2","fonts/urbane-rounded-bold.woff2","fonts/urbane-rounded-demibold.woff2","fonts/urbane-rounded.woff2","images/ameliden.png","images/backgrounds/bg-dots.png","images/backgrounds/bg_dots.jpg","images/backgrounds/bg_dots.svg","images/backgrounds/blue_stripes.png","images/backgrounds/blue_stripes.svg","images/backgrounds/cosmic tiled bg.jpg","images/backgrounds/gracie-pattern.png","images/borders/benday.svg","images/borders/benday_c4.svg","images/borders/benday_c5.svg","images/borders/benday_inverted.svg","images/borders/benday_pink.svg","images/borders/blue_dot.svg","images/borders/clouds.svg","images/borders/white_dot.svg","images/design_portfolio/Halo cover art.jpg","images/design_portfolio/Kawaii face_void eon.jpg","images/design_portfolio/acr_logo.jpg","images/design_portfolio/amy_logo.jpg","images/design_portfolio/bday card.jpg","images/design_portfolio/belgium_logo.jpg","images/design_portfolio/belgium_logo_1.jpg","images/design_portfolio/bread momma candy.jpg","images/design_portfolio/bread momma_logo.jpg","images/design_portfolio/buffalofish_logo.jpg","images/design_portfolio/chocolate_liquor.jpg","images/design_portfolio/cloud_castle_logo.jpg","images/design_portfolio/friend hunters_logo.jpg","images/design_portfolio/gbell_icon.jpg","images/design_portfolio/goo resort.jpg","images/design_portfolio/gooden_logo.jpg","images/design_portfolio/gracie bell_logo.jpg","images/design_portfolio/ivory spread.jpg","images/design_portfolio/momo_banner.jpg","images/design_portfolio/pv_logo.jpg","images/design_portfolio/rute_logo.jpg","images/design_portfolio/shortcake_logo.jpg","images/favicons/favicon.png","images/favicons/favicon.svg","images/gbell_social_image.jpg","images/grace.jpg","images/grace2.jpg","images/grace3.jpg","images/gracie4.png","images/gracie_pfp.png","images/icons/b_arrow_l.svg","images/icons/b_arrow_r.svg","images/icons/b_at.svg","images/icons/b_back.svg","images/icons/b_back_circle.svg","images/icons/b_book.svg","images/icons/b_brush.svg","images/icons/b_close.svg","images/icons/b_code.svg","images/icons/b_github.svg","images/icons/b_github_c2.svg","images/icons/b_image.svg","images/icons/b_logo.svg","images/icons/b_logo_c2.svg","images/icons/b_money.svg","images/icons/b_music.svg","images/icons/b_next.svg","images/icons/b_next_c2.svg","images/icons/b_prev.svg","images/icons/b_prev_c2.svg","images/icons/b_shapes.svg","images/icons/b_soundcloud.svg","images/icons/b_soundcloud_c2.svg","images/icons/b_star.svg","images/icons/b_twitter.svg","images/icons/b_twitter_c2.svg","images/icons/b_video.svg","images/icons/b_youtube.svg","images/icons/b_youtube_c2.svg","images/icons/loading.svg","images/logo.svg","images/logo_no_cloud.svg","images/ponycide_c_9 12 20_gracie chibi.png","images/thumbs/comms/bg_detailed.jpg","images/thumbs/comms/bg_photo.jpg","images/thumbs/comms/bg_simple.jpg","images/thumbs/comms/render_flat.jpg","images/thumbs/comms/render_shaded.jpg","images/thumbs/comms/render_sketch.jpg","images/thumbs/comms/view_closeup.jpg","images/thumbs/comms/view_medium.jpg","images/thumbs/comms/view_wide.jpg","images/thumbs/comms/xtra_graphic_design.jpg","images/thumbs/comms/xtra_other_ideas.png","images/thumbs/comms/xtra_ref.jpg","images/thumbs/comms/xtra_stickers.jpg","images/thumbs/comms/xtra_vector_face.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-d7706618.js","js":["start-d7706618.js","chunks/index-c422e2af.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/8.js')
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
				id: "art",
				pattern: /^\/art\/?$/,
				names: [],
				types: [],
				path: "/art",
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
				id: "comms",
				pattern: /^\/comms\/?$/,
				names: [],
				types: [],
				path: "/comms",
				shadow: null,
				a: [0,5],
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
				a: [0,6],
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
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "test",
				pattern: /^\/test\/?$/,
				names: [],
				types: [],
				path: "/test",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
