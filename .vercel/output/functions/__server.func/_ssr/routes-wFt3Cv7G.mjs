import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { a as Menu, c as Hexagon, d as CircleCheck, f as ChevronRight, i as Orbit, l as FileText, m as Apple, n as Twitter, o as Linkedin, p as ArrowRight, r as ScanFace, s as Instagram, t as X, u as Cylinder } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wFt3Cv7G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
gsapWithCSS.registerPlugin(ScrollTrigger);
/**
* Wires Lenis smooth scroll to GSAP ScrollTrigger so timelines stay
* perfectly synced with the eased scroll position.
*/
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const raf = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(raf);
		gsapWithCSS.ticker.lagSmoothing(0);
		window.__lenis = lenis;
		return () => {
			gsapWithCSS.ticker.remove(raf);
			lenis.destroy();
			delete window.__lenis;
		};
	}, []);
}
function scrollToSection(id) {
	const lenis = window.__lenis;
	const target = document.getElementById(id);
	if (!target) return;
	if (lenis) lenis.scrollTo(target, {
		offset: -40,
		duration: 1.4
	});
	else target.scrollIntoView({ behavior: "smooth" });
}
var logo_default = "/assets/logo-DyuOycsE.png";
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 shrink-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "Nuvé logo",
			className: "h-8 w-8 sm:h-10 sm:w-10 object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg sm:text-xl font-semibold tracking-tight text-black",
			children: "Nuvé"
		})]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "hidden items-center gap-4 xl:gap-6 lg:flex",
		children: [
			{
				label: "Explore",
				id: "hero"
			},
			{
				label: "Your Skin",
				id: "skincare"
			},
			{
				label: "Transformations",
				id: "orb"
			},
			{
				label: "AI Guidance",
				id: "ai-guidance"
			},
			{
				label: "Philosophy",
				id: "manifesto"
			}
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => scrollToSection(i.id),
			className: "text-[13px] font-semibold text-black/80 hover:text-black transition-colors whitespace-nowrap",
			children: i.label
		}, i.label))
	});
}
function Header() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[oklch(0.91_0_0)] pt-3 sm:pt-4 px-2 sm:px-4 md:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				"data-anim": "header",
				className: "flex items-center justify-between rounded-3xl bg-white px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 sm:gap-2 md:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "hidden md:inline-flex rounded-lg border border-gray-200 px-3 lg:px-5 py-2 text-[13px] sm:text-sm font-semibold text-black hover:bg-gray-50 transition-colors whitespace-nowrap",
								children: "Contact Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0F0F0F] px-2.5 sm:px-3 py-1.5 text-white hover:bg-black/90 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, {
									size: 16,
									className: "fill-white shrink-0 sm:size-[18px]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:flex flex-col items-start leading-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-[2px] text-[8px] sm:text-[9px] font-medium text-gray-300",
										children: "Download on the"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] sm:text-[13px] font-semibold",
										children: "App Store"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "lg:hidden flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors shrink-0",
								onClick: () => setMobileOpen((v) => !v),
								"aria-label": "Toggle menu",
								children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
							})
						]
					})
				]
			}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden mx-0 mt-1 rounded-2xl bg-white shadow-lg border border-gray-100 px-5 py-4 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200",
				children: [[
					{
						label: "Explore",
						id: "hero"
					},
					{
						label: "Your Skin",
						id: "skincare"
					},
					{
						label: "Transformations",
						id: "orb"
					},
					{
						label: "AI Guidance",
						id: "ai-guidance"
					},
					{
						label: "Philosophy",
						id: "manifesto"
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						scrollToSection(i.id);
						setMobileOpen(false);
					},
					className: "text-left text-[15px] font-semibold text-black/80 hover:text-black transition-colors py-2",
					children: i.label
				}, i.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMobileOpen(false),
					className: "md:hidden mt-1 text-left text-[15px] font-semibold text-black/60 hover:text-black transition-colors py-2 border-t border-gray-100 pt-3",
					children: "Contact Us"
				})]
			})]
		})
	});
}
var hero_face_default = "/assets/hero-face-DF4Lvgh5.mp4";
function TrustedPill() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 sm:mt-8 md:mt-12 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1.5 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex -space-x-2",
			children: [
				"https://i.pravatar.cc/100?img=68",
				"https://i.pravatar.cc/100?img=47",
				"https://i.pravatar.cc/100?img=33"
			].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: `Trusted user ${i + 1}`,
				className: "h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white object-cover"
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] sm:text-xs font-medium text-foreground/70",
			children: "Trusted by 9,827+ users"
		})]
	});
}
function StatRow({ icon, endValue, suffix, label, delay = 0 }) {
	const numRef = import_react.useRef(null);
	(0, import_react.useEffect)(() => {
		if (!numRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(numRef.current, { textContent: 0 }, {
				textContent: endValue,
				duration: 2.5,
				delay,
				ease: "power3.out",
				snap: { textContent: 1 }
			});
		});
		return () => ctx.revert();
	}, [endValue, delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-anim": "stat",
		className: "flex items-center gap-3 sm:gap-4 md:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center text-foreground/60",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium tracking-tight text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: numRef,
				children: "0"
			}), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] sm:text-xs text-muted-foreground leading-tight mt-0.5 sm:mt-1 whitespace-pre-line",
			children: label
		})] })]
	});
}
function Hero() {
	const scanAnimRef = import_react.useRef(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			scanAnimRef.current = gsapWithCSS.to("[data-anim='scan']", {
				x: -25,
				y: 5,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut"
			});
		});
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 px-4 sm:px-6 md:px-10 pt-6 md:pt-8 pb-10 md:pb-16 min-h-[550px] sm:min-h-[600px] md:min-h-[800px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					"data-anim": "hero-image",
					src: hero_face_default,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "h-full w-full object-cover mix-blend-multiply"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-anim": "hero-left",
				className: "flex flex-col justify-start relative z-10 md:col-span-3 pt-2 sm:pt-4 md:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedPill, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 sm:mt-8 md:mt-14 text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-tight text-foreground",
						children: [
							"Unlock",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"your skin's",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"potential"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 sm:mt-4 md:mt-6 text-sm text-muted-foreground max-w-[220px]",
						children: "Our AI scans your face and shows what can be improved"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"data-anim": "cta",
						className: "group relative mt-5 sm:mt-6 md:mt-8 flex w-fit items-center gap-2 overflow-hidden rounded-md bg-[oklch(0.95_0.03_305)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-foreground transition-colors hover:bg-[oklch(0.92_0.04_305)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-anim": "cta-shine",
							className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: "Analyze Skin"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-3 md:col-start-10 flex flex-row md:flex-col justify-start md:justify-end gap-4 sm:gap-6 md:gap-12 relative z-10 md:pb-10 mt-6 sm:mt-8 md:mt-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hexagon, {
							size: 22,
							strokeWidth: 1,
							className: "sm:size-6 md:size-7"
						}),
						endValue: 95,
						suffix: "%",
						label: "accurate skin\nanalysis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orbit, {
							size: 22,
							strokeWidth: 1,
							className: "sm:size-6 md:size-7"
						}),
						endValue: 30,
						suffix: "+",
						label: "skin concerns\nanalyzed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cylinder, {
							size: 22,
							strokeWidth: 1,
							className: "sm:size-6 md:size-7"
						}),
						endValue: 7,
						suffix: "-day",
						label: "personalized\nroutine",
						delay: 1
					})
				]
			})
		]
	});
}
var skincare_face_default = "/assets/skincare-face-C5LS8txs.jpg";
gsapWithCSS.registerPlugin(ScrollTrigger);
function SkincareSection() {
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".skincare-top", {
				scrollTrigger: {
					trigger: panelRef.current,
					start: "top 75%"
				},
				y: 40,
				opacity: 0,
				duration: .8,
				ease: "power3.out"
			});
			gsapWithCSS.from(".skincare-arrow-line", {
				scrollTrigger: {
					trigger: ".skincare-arrow-wrapper",
					start: "top 60%"
				},
				height: 0,
				opacity: 0,
				duration: 1.2,
				ease: "power2.out"
			});
			gsapWithCSS.from(".mindful-reveal", {
				scrollTrigger: {
					trigger: ".mindful-reveal",
					start: "top 85%"
				},
				y: 30,
				opacity: 0,
				duration: .8,
				ease: "power3.out"
			});
		}, panelRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skincare",
		className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-10 pb-10 md:pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					"data-anim": "skincare-img",
					src: skincare_face_default,
					alt: "Applying cream",
					className: "h-[280px] sm:h-[400px] md:h-[820px] w-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"data-anim": "pin",
					className: "absolute left-[42%] top-[28%] flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white shadow-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow",
						children: "SLEEP WELL"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"data-anim": "pin",
					className: "absolute left-[30%] top-[55%] flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white shadow-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow",
						children: "HYDRATE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"data-anim": "pin",
					className: "absolute left-[55%] top-[72%] flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white shadow-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 text-[10px] font-semibold tracking-widest text-white drop-shadow",
						children: "LESS STRESS"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: panelRef,
			className: "relative flex flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[oklch(0.96_0.03_305)] via-white to-white p-6 sm:p-10 md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "skincare-top mt-8 sm:mt-10 md:mt-12 max-w-full md:max-w-[360px] text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight text-[#2B2B2B]",
						children: "AI Skincare"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs sm:text-sm text-[#555] leading-relaxed",
						children: "AI doesn't promise perfection — it observes, learns, and adapts. Every scan interprets the natural passage of your skin's time, highlighting areas for thoughtful care and balance."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "skincare-arrow-wrapper flex flex-1 flex-col items-center justify-center py-6 md:py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "skincare-arrow-line w-px bg-gradient-to-b from-transparent via-[#d6c7ff] to-[#a881ff] h-32 sm:h-48 md:h-[260px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-0 h-2 w-2 rotate-45 border-b border-r border-[#a881ff]" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mindful-reveal mb-6 sm:mb-8 max-w-full md:max-w-[340px] text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-2xl md:text-3xl font-bold tracking-tight text-[#2B2B2B]",
						children: "Mindful Beauty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] sm:text-xs text-[#666] leading-relaxed",
						children: "Meaning: we can't stop aging, but we can guide it with awareness, insight, and gentle personalization."
					})]
				})
			]
		})]
	});
}
var _2nd_image_default = "/assets/2nd-image-fzGILKx6.jpg";
function OrbSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "orb",
		className: "relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-anim": "orb-copy",
			className: "pl-0 md:pl-6 z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full bg-[oklch(0.95_0.03_305)] px-3 py-1 text-xs font-medium tracking-wide text-[oklch(0.35_0.08_305)]",
					children: "Living Model"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-foreground",
					children: [
						"A skin that",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"breathes with you"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 sm:mt-5 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed",
					children: "Our real-time model reacts to every scan — shifting, softening, and glowing as your routine adapts. Move it, watch it, feel it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground font-medium",
						children: "Hover"
					}), " to interact"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground font-medium",
						children: "Watch"
					}), " the pulse"] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: _2nd_image_default,
			alt: "Interactive skin model",
			className: "w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-[2rem] sm:rounded-[2.5rem] object-cover shadow-sm border border-[#e8d8f5]"
		})]
	});
}
function TagBadge({ imageSrc, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-anim": "tag",
		className: `flex items-center gap-2 rounded-full border border-foreground/10 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 duration-300 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: imageSrc,
			alt: label,
			className: "h-5 w-5 rounded-full object-cover shrink-0 select-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-foreground/90 tracking-tight",
			children: label
		})]
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "manifesto",
		"data-anim": "manifesto",
		className: "relative px-4 md:px-10 pb-0 bg-gradient-to-b from-white via-white to-[oklch(0.91_0_0)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl pt-14 pb-20 md:pt-20 md:pb-28 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-wrap gap-2 justify-center mb-6 lg:mb-0 lg:absolute lg:inset-0 lg:pointer-events-none",
				children: [
					{
						label: "Beautiful",
						imageSrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&auto=format&fit=crop&q=80",
						className: "lg:absolute lg:left-[22%] lg:top-4"
					},
					{
						label: "Healthy",
						imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&auto=format&fit=crop&q=80",
						className: "lg:absolute lg:right-[22%] lg:top-0"
					},
					{
						label: "Confident",
						imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
						className: "lg:absolute lg:left-[8%] lg:top-[45%]"
					},
					{
						label: "Glowing",
						imageSrc: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=150&auto=format&fit=crop&q=80",
						className: "lg:absolute lg:left-[35%] lg:bottom-8"
					},
					{
						label: "Happy",
						imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
						className: "lg:absolute lg:right-[22%] lg:bottom-2"
					}
				].map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagBadge, {
					label: badge.label,
					imageSrc: badge.imageSrc,
					className: badge.className
				}, badge.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl sm:text-3xl md:text-[2.6rem] font-medium leading-[1.35] tracking-tight text-foreground",
				children: "Nuvé helps you understand and care for your skin like never before. Get insights and tips backed by AI and real science for your healthiest, happiest skin".split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"data-anim": "word",
					className: "inline-block",
					children: [w, "\xA0"]
				}, i))
			})]
		})
	});
}
function AIGuidance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ai-guidance",
		className: "relative px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-white overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-anim": "ai-mockup",
				className: "relative w-full max-w-md mx-auto lg:mx-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-gradient-to-br from-[#f8f5ff] to-[#e8d8f5] opacity-50 blur-2xl rounded-[3rem] -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[420px] sm:h-[500px] lg:h-[600px] w-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#f8f5ff] to-[#f0e8ff] p-4 sm:p-5 lg:p-6 shadow-lg border border-[#e8d8f5] flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-3 sm:p-4 lg:p-5 mb-4 sm:mb-6 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] sm:text-[10px] font-bold tracking-widest text-[#a881ff] uppercase mb-0.5 sm:mb-1",
								children: "Today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-gray-900 text-base sm:text-lg leading-none",
								children: "Morning Routine"
							})] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 flex flex-col gap-2 sm:gap-3 z-10",
							children: [
								{
									step: "Step 1",
									title: "Gentle Cleanser",
									detail: "Removes overnight buildup",
									time: "1 min",
									active: true
								},
								{
									step: "Step 2",
									title: "Vitamin C Serum",
									detail: "Brightens dark spots",
									time: "2 mins",
									active: false
								},
								{
									step: "Step 3",
									title: "SPF 50 Moisturizer",
									detail: "Crucial UV protection today",
									time: "1 min",
									active: false
								}
							].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex gap-3 sm:gap-4 items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-transparent hover:border-[#e8d8f5] cursor-default",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-colors duration-300 ${item.active ? "text-[#a881ff]" : "text-gray-200 group-hover:text-[#c9a8ff]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between items-end mb-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] sm:text-[10px] font-bold tracking-wider text-[#a881ff] uppercase",
												children: item.step
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] sm:text-[10px] text-gray-400 font-medium",
												children: item.time
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-gray-900 text-xs sm:text-sm",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] sm:text-xs text-gray-500 line-clamp-1",
											children: item.detail
										})
									]
								})]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto z-10 pt-4 sm:pt-5 lg:pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[10px] sm:text-xs font-medium text-gray-500 mb-1.5 sm:mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Routine Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#a881ff]",
									children: "1/3 Completed"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 sm:h-2 w-full bg-white rounded-full overflow-hidden shadow-inner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-gradient-to-r from-[#c9a8ff] to-[#a881ff] w-1/3 rounded-full" })
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-anim": "ai-copy",
				className: "max-w-md xl:max-w-lg w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#f8f5ff] border border-[#e8d8f5] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#a881ff]",
						children: "Personalized Care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900",
						children: [
							"Your routine,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							" intelligently adapted."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-600",
						children: "Nuvé's AI doesn't just give you a static list of products. It builds a dynamic relationship with your skin, adjusting your morning and evening rituals based on real-time scans, weather data, and your unique progression."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 sm:mt-10 space-y-3 sm:space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex gap-3 sm:gap-5 p-3 sm:p-4 -ml-2 sm:-ml-4 rounded-2xl hover:bg-[#f8f5ff]/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#f8f5ff] text-[#a881ff] shadow-sm group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanFace, {
									size: 20,
									strokeWidth: 1.5,
									className: "sm:size-6"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1.5 sm:gap-2",
									children: ["Micro-climate Adjustments", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 16,
										className: "hidden sm:block text-gray-300 group-hover:text-[#a881ff] transition-colors group-hover:translate-x-1"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed",
									children: "If the air is dry or UV is high, your routine shifts instantly to protect and hydrate."
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex gap-3 sm:gap-5 p-3 sm:p-4 -ml-2 sm:-ml-4 rounded-2xl hover:bg-[#f8f5ff]/50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#f8f5ff] text-[#a881ff] shadow-sm group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									size: 20,
									strokeWidth: 1.5,
									className: "sm:size-6"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1.5 sm:gap-2",
									children: ["Progress Tracking", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 16,
										className: "hidden sm:block text-gray-300 group-hover:text-[#a881ff] transition-colors group-hover:translate-x-1"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed",
									children: "See what's working with clear, visual timelines of your skin's health over weeks and months."
								})]
							})]
						})]
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[oklch(0.91_0_0)] text-black px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-anim": "footer-content",
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 border-b border-black/10 pb-10 sm:pb-12 md:pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-semibold tracking-tight text-black",
						children: "Nuvé"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 sm:mt-4 max-w-sm text-sm text-black/50 leading-relaxed",
						children: "Empowering your skincare journey with intelligent analysis, mindful insights, and personalized guidance."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 18 })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					"data-anim": "footer-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-4 sm:mb-6 text-black",
						children: "Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 sm:space-y-4 text-sm text-black/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Features"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "How it works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Pricing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Download App"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					"data-anim": "footer-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-4 sm:mb-6 text-black",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 sm:space-y-4 text-sm text-black/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "About Us"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Careers"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Blog"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-black transition-colors",
								children: "Contact"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 lg:col-span-3",
					"data-anim": "footer-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold mb-4 sm:mb-6 text-black",
							children: "Stay Updated"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-black/50 mb-4 leading-relaxed",
							children: "Get the latest skincare tips and AI updates delivered to your inbox."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "Enter your email",
								className: "w-full bg-white/60 border border-black/10 rounded-xl py-2.5 sm:py-3 pl-4 pr-12 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/30 transition-colors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "absolute right-1.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white hover:bg-black/80 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/40 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Nuvé Inc. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-black transition-colors",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-black transition-colors",
						children: "Terms of Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-black transition-colors",
						children: "Cookie Settings"
					})
				]
			})]
		})]
	});
}
function Loader() {
	const loaderRef = (0, import_react.useRef)(null);
	const iconRef = (0, import_react.useRef)(null);
	const textRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline().to([iconRef.current, textRef.current], {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: .15,
				ease: "power4.out"
			}).to([iconRef.current, textRef.current], {
				y: -30,
				opacity: 0,
				duration: .6,
				delay: .8,
				stagger: .1,
				ease: "power3.in"
			}).to(loaderRef.current, {
				yPercent: -100,
				duration: 1.2,
				ease: "expo.inOut"
			});
		}, loaderRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: loaderRef,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-white pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden pt-2 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: iconRef,
					src: logo_default,
					alt: "logo",
					className: "h-12 w-12 object-contain translate-y-12 opacity-0"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden pt-2 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: textRef,
					className: "block text-4xl font-semibold tracking-tight text-black translate-y-12 opacity-0",
					children: "Nuvé"
				})
			})]
		})
	});
}
function Index() {
	const rootRef = (0, import_react.useRef)(null);
	useSmoothScroll();
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from("[data-anim='shell']", {
				y: 24,
				opacity: 0,
				scale: .99,
				duration: .9,
				ease: "power3.out",
				delay: 2.2
			});
			gsapWithCSS.from("[data-anim='header'] > *", {
				y: -20,
				opacity: 0,
				duration: .7,
				ease: "power3.out",
				stagger: .08,
				delay: 2.2
			});
			gsapWithCSS.from("[data-anim='hero-left'] > *", {
				y: 30,
				opacity: 0,
				duration: .8,
				ease: "power3.out",
				stagger: .1,
				delay: 2.35
			});
			gsapWithCSS.from("[data-anim='hero-image']", {
				scale: 1.08,
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				delay: 2.25
			});
			gsapWithCSS.from("[data-anim='stat']", {
				x: 30,
				opacity: 0,
				duration: .7,
				ease: "power3.out",
				stagger: .12,
				delay: 2.55
			});
			const cta = rootRef.current?.querySelector("[data-anim='cta']");
			const shine = rootRef.current?.querySelector("[data-anim='cta-shine']");
			if (cta && shine) {
				gsapWithCSS.to(cta, {
					scale: 1.06,
					boxShadow: "0 12px 30px -10px oklch(0.7 0.15 305 / 0.5)",
					scrollTrigger: {
						trigger: "[data-anim='skincare-img']",
						start: "top 90%",
						end: "bottom top",
						scrub: 1
					}
				});
				gsapWithCSS.to(shine, {
					xPercent: 200,
					duration: 1.2,
					ease: "power2.inOut",
					repeat: -1,
					repeatDelay: 3.5
				});
				ScrollTrigger.create({
					trigger: "#orb",
					start: "top 70%",
					onEnter: () => {
						gsapWithCSS.timeline().to(cta, {
							scale: 1.15,
							duration: .25,
							ease: "power2.out"
						}).to(cta, {
							keyframes: { backgroundColor: [
								"oklch(0.88 0.06 305)",
								"oklch(0.78 0.18 305)",
								"oklch(0.88 0.06 305)"
							] },
							duration: .9
						}, "<").to(cta, {
							scale: 1,
							duration: .4,
							ease: "elastic.out(1, 0.5)"
						});
					}
				});
			}
			gsapWithCSS.from("[data-anim='skincare-img']", {
				scrollTrigger: {
					trigger: "[data-anim='skincare-img']",
					start: "top 80%"
				},
				scale: 1.1,
				opacity: 0,
				duration: 1.1,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='skincare-copy'] > *", {
				scrollTrigger: {
					trigger: "[data-anim='skincare-copy']",
					start: "top 75%"
				},
				y: 40,
				opacity: 0,
				duration: .8,
				stagger: .15,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='pin']", {
				scrollTrigger: {
					trigger: "[data-anim='skincare-img']",
					start: "top 70%"
				},
				scale: 0,
				opacity: 0,
				duration: .5,
				stagger: .2,
				ease: "back.out(2.5)",
				delay: .4
			});
			gsapWithCSS.from("[data-anim='orb-copy'] > *", {
				scrollTrigger: {
					trigger: "#orb",
					start: "top 75%"
				},
				y: 30,
				opacity: 0,
				duration: .8,
				stagger: .1,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='orb-canvas']", {
				scrollTrigger: {
					trigger: "#orb",
					start: "top 80%"
				},
				scale: .9,
				opacity: 0,
				duration: 1,
				ease: "power3.out"
			});
			gsapWithCSS.to("[data-anim='orb-canvas']", {
				scrollTrigger: {
					trigger: "#orb",
					start: "top bottom",
					end: "bottom top",
					scrub: 1
				},
				y: -60,
				ease: "none"
			});
			gsapWithCSS.from("[data-anim='tag']", {
				scrollTrigger: {
					trigger: "[data-anim='manifesto']",
					start: "top 70%"
				},
				y: 20,
				scale: .7,
				opacity: 0,
				duration: .6,
				stagger: .1,
				ease: "back.out(2)"
			});
			const words = gsapWithCSS.utils.toArray("[data-anim='word']");
			gsapWithCSS.fromTo(words, { opacity: .15 }, {
				opacity: 1,
				duration: .4,
				stagger: .05,
				ease: "none",
				scrollTrigger: {
					trigger: "[data-anim='manifesto']",
					start: "top 60%",
					end: "bottom 70%",
					scrub: 1
				}
			});
			gsapWithCSS.from("[data-anim='ai-copy'] > *", {
				scrollTrigger: {
					trigger: "#ai-guidance",
					start: "top 75%"
				},
				y: 40,
				opacity: 0,
				duration: .8,
				stagger: .15,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='ai-mockup']", {
				scrollTrigger: {
					trigger: "#ai-guidance",
					start: "top 75%"
				},
				x: -40,
				opacity: 0,
				duration: 1,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='footer-content']", {
				scrollTrigger: {
					trigger: "footer",
					start: "top 90%"
				},
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power3.out"
			});
			gsapWithCSS.from("[data-anim='footer-col']", {
				scrollTrigger: {
					trigger: "footer",
					start: "top 85%"
				},
				y: 30,
				opacity: 0,
				duration: .7,
				stagger: .12,
				ease: "power3.out",
				delay: .2
			});
			ScrollTrigger.refresh();
		}, rootRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "min-h-screen bg-white relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			"data-anim": "shell",
			className: "w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkincareSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIGuidance, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})]
	});
}
//#endregion
export { Index as component };
