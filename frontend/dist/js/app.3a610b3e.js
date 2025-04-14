(function () { "use strict"; var e = { 3753: function (e, t, s) { var r = s(3751), o = s(641); const a = { id: "app" }, n = { key: 0, class: "navbar" }; function l(e, t, s, r, l, i) { const c = (0, o.g2)("router-link"), u = (0, o.g2)("router-view"); return (0, o.uX)(), (0, o.CE)("div", a, [r.isAuthenticated ? ((0, o.uX)(), (0, o.CE)("nav", n, [(0, o.bF)(c, { to: "/", class: "nav-link" }, { default: (0, o.k6)((() => t[1] || (t[1] = [(0, o.eW)("Home")]))), _: 1 }), (0, o.bF)(c, { to: "/chat", class: "nav-link" }, { default: (0, o.k6)((() => t[2] || (t[2] = [(0, o.eW)("Chat")]))), _: 1 }), (0, o.bF)(c, { to: "/server-manager", class: "nav-link" }, { default: (0, o.k6)((() => t[3] || (t[3] = [(0, o.eW)("Server Manager")]))), _: 1 }), (0, o.Lk)("button", { onClick: t[0] || (t[0] = (...e) => r.logout && r.logout(...e)), class: "logout-btn" }, "Logout")])) : (0, o.Q3)("", !0), (0, o.bF)(u)]) } s(4114); var i = s(6278), c = s(5220), u = { name: "App", setup() { const e = (0, i.Pj)(), t = (0, c.rd)(), s = (0, o.EW)((() => e.getters.isAuthenticated)), r = () => { e.dispatch("logout"), t.push("/login") }; return { isAuthenticated: s, logout: r } } }, d = s(6262); const m = (0, d.A)(u, [["render", l]]); var p = m; s(8111), s(3579); const h = { class: "home" }, v = { class: "flex justify-center gap-8 mt-12" }; function g(e, t, s, r, a, n) { return (0, o.uX)(), (0, o.CE)("div", h, [t[4] || (t[4] = (0, o.Lk)("h1", { class: "text-3xl font-bold text-center my-8" }, "Welcome to MCP Debug", -1)), (0, o.Lk)("div", v, [(0, o.Lk)("div", { class: "card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-64", onClick: t[0] || (t[0] = t => e.$router.push("/chat")) }, t[2] || (t[2] = [(0, o.Lk)("h2", { class: "text-xl font-semibold mb-4" }, "Chat", -1), (0, o.Lk)("p", { class: "text-gray-600" }, "Access the chat interface to interact with the AI assistant.", -1)])), (0, o.Lk)("div", { class: "card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer w-64", onClick: t[1] || (t[1] = t => e.$router.push("/server-manager")) }, t[3] || (t[3] = [(0, o.Lk)("h2", { class: "text-xl font-semibold mb-4" }, "Server Manager", -1), (0, o.Lk)("p", { class: "text-gray-600" }, "Manage your server settings and configurations.", -1)]))])]) } var k = { name: "HomeView" }; const f = (0, d.A)(k, [["render", g], ["__scopeId", "data-v-bb4eb76a"]]); var L = f, y = s(33); const b = { class: "chat-view" }, w = { class: "chat-container" }, E = { class: "messages", ref: "messagesContainer" }, C = { class: "message-content" }, T = { class: "message-header" }, R = { class: "sender" }, S = { class: "timestamp" }, _ = ["innerHTML"], P = { class: "input-container" }, x = ["disabled"]; function X(e, t, s, a, n, l) { return (0, o.uX)(), (0, o.CE)("div", b, [t[3] || (t[3] = (0, o.Lk)("div", { class: "page-header" }, [(0, o.Lk)("h1", { class: "text-3xl font-bold" }, "Chat"), (0, o.Lk)("p", { class: "text-gray-600 mt-2" }, "Interact with the AI assistant")], -1)), (0, o.Lk)("div", w, [(0, o.Lk)("div", E, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(a.messages, ((e, t) => ((0, o.uX)(), (0, o.CE)("div", { key: t, class: (0, y.C4)(["message", e.type]) }, [(0, o.Lk)("div", C, [(0, o.Lk)("div", T, [(0, o.Lk)("span", R, (0, y.v_)(e.sender), 1), (0, o.Lk)("span", S, (0, y.v_)(a.formatTimestamp(e.timestamp)), 1)]), (0, o.Lk)("div", { class: "message-text", innerHTML: a.formatMessage(e.text) }, null, 8, _)])], 2)))), 128))], 512), (0, o.Lk)("div", P, [(0, o.bo)((0, o.Lk)("textarea", { "onUpdate:modelValue": t[0] || (t[0] = e => a.newMessage = e), onKeydown: t[1] || (t[1] = (0, r.jR)((0, r.D$)(((...e) => a.sendMessage && a.sendMessage(...e)), ["prevent"]), ["enter"])), placeholder: "Type your message here...", rows: "3", class: "message-input" }, null, 544), [[r.Jo, a.newMessage]]), (0, o.Lk)("button", { onClick: t[2] || (t[2] = (...e) => a.sendMessage && a.sendMessage(...e)), class: "send-button", disabled: !a.newMessage.trim() }, " Send ", 8, x)])])]) } var F = s(953), M = s(23), j = { name: "ChatView", setup() { const e = (0, F.KR)([]), t = (0, F.KR)(""), s = (0, F.KR)(null), r = async () => { if (!t.value.trim()) return; const s = { text: t.value, sender: "You", timestamp: new Date, type: "user" }; e.value.push(s), t.value = "", setTimeout((() => { e.value.push({ text: "This is a simulated response. Replace with actual API integration.", sender: "AI", timestamp: new Date, type: "ai" }), a() }), 1e3) }, a = async () => { await (0, o.dY)(), s.value && (s.value.scrollTop = s.value.scrollHeight) }, n = e => new Date(e).toLocaleTimeString(), l = e => (0, M["default"])(e); return (0, o.sV)((() => { a() })), { messages: e, newMessage: t, messagesContainer: s, sendMessage: r, formatTimestamp: n, formatMessage: l } } }; const A = (0, d.A)(j, [["render", X], ["__scopeId", "data-v-dad6fcd2"]]); var O = A; const I = { class: "login-view" }, $ = { class: "login-container" }, U = { class: "form-group" }, D = ["disabled"], J = { class: "form-group" }, q = ["disabled"], Q = { key: 0, class: "error-message" }, V = ["disabled"], K = { class: "register-link" }; function N(e, t, s, a, n, l) { const i = (0, o.g2)("router-link"); return (0, o.uX)(), (0, o.CE)("div", I, [(0, o.Lk)("div", $, [t[7] || (t[7] = (0, o.Lk)("h2", null, "Login", -1)), (0, o.Lk)("form", { onSubmit: t[2] || (t[2] = (0, r.D$)(((...e) => a.handleLogin && a.handleLogin(...e)), ["prevent"])), class: "login-form" }, [(0, o.Lk)("div", U, [t[3] || (t[3] = (0, o.Lk)("label", { for: "username" }, "Username", -1)), (0, o.bo)((0, o.Lk)("input", { type: "text", id: "username", "onUpdate:modelValue": t[0] || (t[0] = e => a.username = e), required: "", placeholder: "Enter your username", disabled: a.isLoading }, null, 8, D), [[r.Jo, a.username]])]), (0, o.Lk)("div", J, [t[4] || (t[4] = (0, o.Lk)("label", { for: "password" }, "Password", -1)), (0, o.bo)((0, o.Lk)("input", { type: "password", id: "password", "onUpdate:modelValue": t[1] || (t[1] = e => a.password = e), required: "", placeholder: "Enter your password", disabled: a.isLoading }, null, 8, q), [[r.Jo, a.password]])]), a.error ? ((0, o.uX)(), (0, o.CE)("div", Q, (0, y.v_)(a.error), 1)) : (0, o.Q3)("", !0), (0, o.Lk)("button", { type: "submit", class: "login-button", disabled: a.isLoading }, (0, y.v_)(a.isLoading ? "Logging in..." : "Login"), 9, V), (0, o.Lk)("div", K, [t[6] || (t[6] = (0, o.eW)(" Don't have an account? ")), (0, o.bF)(i, { to: "/register" }, { default: (0, o.k6)((() => t[5] || (t[5] = [(0, o.eW)("Register here")]))), _: 1 })])], 32)])]) } var W = { name: "LoginView", setup() { const e = (0, i.Pj)(), t = (0, c.rd)(), s = (0, F.KR)(""), r = (0, F.KR)(""), a = (0, F.KR)(!1), n = (0, o.EW)((() => e.state.loginError)), l = async () => { if (!a.value) { a.value = !0; try { await e.dispatch("login", { username: s.value, password: r.value }), t.push("/") } catch (o) { } finally { a.value = !1 } } }; return { username: s, password: r, handleLogin: l, isLoading: a, error: n } } }; const H = (0, d.A)(W, [["render", N], ["__scopeId", "data-v-a7361d92"]]); var B = H; const Y = { class: "register-container" }, z = { class: "register-form" }, G = { class: "form-group" }, Z = { class: "form-group" }, ee = { class: "form-group" }, te = { class: "form-group" }, se = { key: 0, class: "error-message" }, re = ["disabled"], oe = { class: "login-link" }; function ae(e, t, s, a, n, l) { const i = (0, o.g2)("router-link"); return (0, o.uX)(), (0, o.CE)("div", Y, [(0, o.Lk)("div", z, [t[11] || (t[11] = (0, o.Lk)("h2", null, "Create an Account", -1)), (0, o.Lk)("form", { onSubmit: t[4] || (t[4] = (0, r.D$)(((...e) => a.handleSubmit && a.handleSubmit(...e)), ["prevent"])), class: "form" }, [(0, o.Lk)("div", G, [t[5] || (t[5] = (0, o.Lk)("label", { for: "username" }, "Username", -1)), (0, o.bo)((0, o.Lk)("input", { type: "text", id: "username", "onUpdate:modelValue": t[0] || (t[0] = e => a.formData.username = e), required: "", class: "form-control" }, null, 512), [[r.Jo, a.formData.username]])]), (0, o.Lk)("div", Z, [t[6] || (t[6] = (0, o.Lk)("label", { for: "email" }, "Email", -1)), (0, o.bo)((0, o.Lk)("input", { type: "email", id: "email", "onUpdate:modelValue": t[1] || (t[1] = e => a.formData.email = e), required: "", class: "form-control" }, null, 512), [[r.Jo, a.formData.email]])]), (0, o.Lk)("div", ee, [t[7] || (t[7] = (0, o.Lk)("label", { for: "password" }, "Password", -1)), (0, o.bo)((0, o.Lk)("input", { type: "password", id: "password", "onUpdate:modelValue": t[2] || (t[2] = e => a.formData.password = e), required: "", class: "form-control" }, null, 512), [[r.Jo, a.formData.password]])]), (0, o.Lk)("div", te, [t[8] || (t[8] = (0, o.Lk)("label", { for: "confirmPassword" }, "Confirm Password", -1)), (0, o.bo)((0, o.Lk)("input", { type: "password", id: "confirmPassword", "onUpdate:modelValue": t[3] || (t[3] = e => a.formData.confirmPassword = e), required: "", class: "form-control" }, null, 512), [[r.Jo, a.formData.confirmPassword]])]), a.error ? ((0, o.uX)(), (0, o.CE)("div", se, (0, y.v_)(a.error), 1)) : (0, o.Q3)("", !0), (0, o.Lk)("button", { type: "submit", class: "submit-button", disabled: a.isLoading }, (0, y.v_)(a.isLoading ? "Creating Account..." : "Create Account"), 9, re), (0, o.Lk)("p", oe, [t[10] || (t[10] = (0, o.eW)(" Already have an account? ")), (0, o.bF)(i, { to: "/login" }, { default: (0, o.k6)((() => t[9] || (t[9] = [(0, o.eW)("Log in")]))), _: 1 })])], 32)])]) } var ne = { name: "RegisterView", setup() { const e = (0, i.Pj)(), t = (0, c.rd)(), s = (0, F.KR)(!1), r = (0, o.EW)((() => e.state.registrationError)), a = (0, F.KR)({ username: "", email: "", password: "", confirmPassword: "" }), n = () => a.value.password.length < 6 ? (e.commit("setRegistrationError", "Password must be at least 6 characters long"), !1) : a.value.password === a.value.confirmPassword || (e.commit("setRegistrationError", "Passwords do not match"), !1), l = async () => { if (n()) { s.value = !0, e.commit("setRegistrationError", null); try { const s = { username: a.value.username, email: a.value.email, password: a.value.password }; await e.dispatch("register", s), t.push("/login") } catch (r) { } finally { s.value = !1 } } }; return { formData: a, error: r, isLoading: s, handleSubmit: l } } }; const le = (0, d.A)(ne, [["render", ae], ["__scopeId", "data-v-37db37b0"]]); var ie = le; const ce = { class: "server-manager-view" }, ue = { class: "content-wrapper" }; function de(e, t, s, r, a, n) { const l = (0, o.g2)("ServerManager"); return (0, o.uX)(), (0, o.CE)("div", ce, [t[0] || (t[0] = (0, o.Lk)("div", { class: "page-header" }, [(0, o.Lk)("h1", { class: "text-3xl font-bold" }, "Server Manager"), (0, o.Lk)("p", { class: "text-gray-600 mt-2" }, "Manage your server connections and configurations")], -1)), (0, o.Lk)("div", ue, [(0, o.bF)(l)])]) } s(1701); const me = { class: "server-manager" }, pe = { class: "main-container" }, he = { class: "left-tabs" }, ve = { class: "content-area" }, ge = { key: 0, class: "tab-content" }, ke = { class: "server-form" }, fe = { class: "form-group" }, Le = { class: "form-group" }, ye = { key: 0, class: "error-message" }, be = ["disabled"], we = { class: "server-list" }, Ee = { class: "server-list-header" }, Ce = ["disabled"], Te = ["onClick"], Re = { class: "server-info" }, Se = { class: "server-name" }, _e = { class: "server-address" }, Pe = { key: 0, class: "server-tools" }, xe = { key: 0, class: "tool-list" }, Xe = ["onClick"], Fe = { class: "tool-header" }, Me = { class: "tool-name" }, je = { class: "tool-details" }, Ae = { class: "tool-description" }, Oe = { key: 0, class: "tool-parameters" }, Ie = { key: 1, class: "server-prompts" }, $e = { key: 0, class: "prompt-list" }, Ue = ["onClick"], De = { class: "item-header" }, Je = { class: "item-name" }, qe = { class: "item-content" }, Qe = { class: "item-description" }, Ve = { key: 0, class: "item-parameters" }, Ke = { key: 2, class: "server-resources" }, Ne = { key: 0, class: "resource-list" }, We = ["onClick"], He = { class: "item-header" }, Be = { class: "item-name" }, Ye = { class: "item-content" }, ze = { class: "item-description" }, Ge = { key: 0, class: "item-type" }, Ze = { key: 3, class: "server-resource-templates" }, et = { key: 0, class: "template-list" }, tt = ["onClick"], st = { class: "item-header" }, rt = { class: "item-name" }, ot = { class: "item-content" }, at = { class: "item-description" }, nt = { key: 0, class: "item-schema" }, lt = { class: "server-actions" }, it = ["onClick", "disabled"], ct = ["onClick", "disabled"], ut = { key: 0, class: "tool-parameter-form" }, dt = ["for"], mt = ["id", "onUpdate:modelValue", "type", "placeholder", "required"], pt = ["disabled"], ht = { key: 0, class: "tool-result" }, vt = { class: "result-content" }, gt = { key: 1, class: "tool-parameter-form" }, kt = ["for"], ft = ["id", "onUpdate:modelValue", "placeholder", "required"], Lt = ["disabled"], yt = { key: 0, class: "tool-result" }, bt = { class: "result-content" }, wt = { key: 2, class: "tool-parameter-form" }, Et = ["for"], Ct = ["id", "onUpdate:modelValue", "placeholder", "required"], Tt = ["disabled"], Rt = { key: 0, class: "tool-result" }, St = { class: "result-content" }, _t = { key: 3, class: "tool-parameter-form" }, Pt = { class: "template-url" }, xt = ["for"], Xt = ["id", "onUpdate:modelValue", "placeholder", "required"], Ft = ["disabled"], Mt = { key: 0, class: "tool-result" }, jt = { class: "result-content" }, At = { key: 1, class: "tab-content" }, Ot = { class: "chat-tools-section" }, It = { class: "tools-container" }, $t = { class: "tools-input-wrapper" }, Ut = { class: "tools-button-wrapper" }, Dt = ["disabled"], Jt = { key: 0, class: "tools-result" }, qt = { class: "result-content" }, Qt = { class: "chat-container" }, Vt = { class: "chat-messages" }, Kt = { class: "message-content" }, Nt = { class: "chat-input" }; function Wt(e, t, s, a, n, l) { return (0, o.uX)(), (0, o.CE)("div", me, [(0, o.Lk)("div", pe, [(0, o.Lk)("div", he, [(0, o.Lk)("div", { class: (0, y.C4)(["tab-item", { active: "server" === n.activeTab }]), onClick: t[0] || (t[0] = e => n.activeTab = "server") }, " Server Manage ", 2), (0, o.Lk)("div", { class: (0, y.C4)(["tab-item", { active: "chat" === n.activeTab }]), onClick: t[1] || (t[1] = e => n.activeTab = "chat") }, " Chat ", 2)]), (0, o.Lk)("div", ve, ["server" === n.activeTab ? ((0, o.uX)(), (0, o.CE)("div", ge, [(0, o.Lk)("div", ke, [t[16] || (t[16] = (0, o.Lk)("h3", null, "Add New Server", -1)), (0, o.Lk)("form", { onSubmit: t[5] || (t[5] = (0, r.D$)(((...e) => l.addServer && l.addServer(...e)), ["prevent"])) }, [(0, o.Lk)("div", fe, [(0, o.bo)((0, o.Lk)("input", { "onUpdate:modelValue": t[2] || (t[2] = e => n.newServer.name = e), type: "text", placeholder: "Server Name", required: "" }, null, 512), [[r.Jo, n.newServer.name]])]), (0, o.Lk)("div", Le, [(0, o.bo)((0, o.Lk)("input", { "onUpdate:modelValue": t[3] || (t[3] = e => n.newServer.url = e), type: "text", placeholder: "Server URL (e.g. http://localhost:9002/sse)", required: "", onInput: t[4] || (t[4] = (...e) => l.validateUrl && l.validateUrl(...e)) }, null, 544), [[r.Jo, n.newServer.url]]), n.urlError ? ((0, o.uX)(), (0, o.CE)("span", ye, (0, y.v_)(n.urlError), 1)) : (0, o.Q3)("", !0)]), (0, o.Lk)("button", { type: "submit", class: "btn-add", disabled: !!n.urlError }, "Add Server", 8, be)], 32)]), (0, o.Lk)("div", we, [(0, o.Lk)("div", Ee, [t[18] || (t[18] = (0, o.Lk)("h3", null, "Servers", -1)), (0, o.Lk)("button", { onClick: t[6] || (t[6] = (...e) => l.fetchServers && l.fetchServers(...e)), class: "btn-refresh", disabled: n.isExecuting, title: "Refresh servers" }, t[17] || (t[17] = [(0, o.Lk)("span", { class: "refresh-icon" }, "↻", -1)]), 8, Ce)]), ((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.servers, (e => ((0, o.uX)(), (0, o.CE)("div", { key: e.name, class: (0, y.C4)(["server-item", { selected: n.selectedServer?.name === e.name, connected: "connected" === e.status, error: "error" === e.status }]), onClick: t => l.selectServer(e) }, [(0, o.Lk)("div", Re, [(0, o.Lk)("span", Se, (0, y.v_)(e.name), 1), (0, o.Lk)("span", _e, (0, y.v_)(e.url), 1), (0, o.Lk)("span", { class: (0, y.C4)(["server-status", e.status]) }, (0, y.v_)(e.status), 3), e.tools ? ((0, o.uX)(), (0, o.CE)("span", Pe, [(0, o.eW)(" Tools (" + (0, y.v_)(e.tools.length) + "): " + (0, y.v_)(e.tools.map((e => e.name)).slice(0, 3).join(", ")) + " ", 1), e.tools.length > 0 ? ((0, o.uX)(), (0, o.CE)("div", xe, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(e.tools, (s => ((0, o.uX)(), (0, o.CE)("div", { key: s.name, class: (0, y.C4)(["tool-item", { selected: n.selectedTool?.name === s.name }]), onClick: (0, r.D$)((t => l.selectTool(e, s)), ["stop"]) }, [(0, o.Lk)("div", Fe, [(0, o.Lk)("span", Me, (0, y.v_)(s.name), 1)]), (0, o.Lk)("div", je, [(0, o.Lk)("p", Ae, (0, y.v_)(s.description), 1), s.inputSchema?.properties ? ((0, o.uX)(), (0, o.CE)("div", Oe, [t[19] || (t[19] = (0, o.Lk)("h4", null, "Parameters:", -1)), (0, o.Lk)("ul", null, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(s.inputSchema.properties, ((e, t) => ((0, o.uX)(), (0, o.CE)("li", { key: t }, (0, y.v_)(t) + ": " + (0, y.v_)(e.title), 1)))), 128))])])) : (0, o.Q3)("", !0)])], 10, Xe)))), 128))])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), e.prompts ? ((0, o.uX)(), (0, o.CE)("span", Ie, [(0, o.eW)(" Prompts (" + (0, y.v_)(e.prompts.length) + "): " + (0, y.v_)(e.prompts.map((e => e.name)).slice(0, 3).join(", ")) + " ", 1), e.prompts.length > 0 ? ((0, o.uX)(), (0, o.CE)("div", $e, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(e.prompts, (s => ((0, o.uX)(), (0, o.CE)("div", { key: s.name, class: (0, y.C4)(["item-details", { selected: n.selectedPrompt?.name === s.name }]), onClick: (0, r.D$)((t => l.selectPrompt(e, s)), ["stop"]) }, [(0, o.Lk)("div", De, [(0, o.Lk)("span", Je, (0, y.v_)(s.name), 1)]), (0, o.Lk)("div", qe, [(0, o.Lk)("p", Qe, (0, y.v_)(s.description), 1), s.parameters ? ((0, o.uX)(), (0, o.CE)("div", Ve, [t[20] || (t[20] = (0, o.Lk)("h4", null, "Parameters:", -1)), (0, o.Lk)("ul", null, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(s.parameters, (e => ((0, o.uX)(), (0, o.CE)("li", { key: e.name }, (0, y.v_)(e.name) + ": " + (0, y.v_)(e.description), 1)))), 128))])])) : (0, o.Q3)("", !0)])], 10, Ue)))), 128))])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), e.resources ? ((0, o.uX)(), (0, o.CE)("span", Ke, [(0, o.eW)(" Resources (" + (0, y.v_)(e.resources.length) + "): " + (0, y.v_)(e.resources.map((e => e.name)).slice(0, 3).join(", ")) + " ", 1), e.resources.length > 0 ? ((0, o.uX)(), (0, o.CE)("div", Ne, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(e.resources, (s => ((0, o.uX)(), (0, o.CE)("div", { key: s.name, class: (0, y.C4)(["item-details", { selected: n.selectedResource?.name === s.name }]), onClick: (0, r.D$)((t => l.selectResource(e, s)), ["stop"]) }, [(0, o.Lk)("div", He, [(0, o.Lk)("span", Be, (0, y.v_)(s.name), 1)]), (0, o.Lk)("div", Ye, [(0, o.Lk)("p", ze, (0, y.v_)(s.description), 1), s.type ? ((0, o.uX)(), (0, o.CE)("div", Ge, [t[21] || (t[21] = (0, o.Lk)("h4", null, "Type:", -1)), (0, o.Lk)("p", null, (0, y.v_)(s.type), 1)])) : (0, o.Q3)("", !0)])], 10, We)))), 128))])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), e.resource_templates ? ((0, o.uX)(), (0, o.CE)("span", Ze, [(0, o.eW)(" Resource Templates (" + (0, y.v_)(e.resource_templates.length) + "): " + (0, y.v_)(e.resource_templates.map((e => e.name)).slice(0, 3).join(", ")) + " ", 1), e.resource_templates.length > 0 ? ((0, o.uX)(), (0, o.CE)("div", et, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(e.resource_templates, (s => ((0, o.uX)(), (0, o.CE)("div", { key: s.name, class: (0, y.C4)(["item-details", { selected: n.selectedResourceTemplate?.name === s.name }]), onClick: (0, r.D$)((t => l.selectResourceTemplate(e, s)), ["stop"]) }, [(0, o.Lk)("div", st, [(0, o.Lk)("span", rt, (0, y.v_)(s.name), 1)]), (0, o.Lk)("div", ot, [(0, o.Lk)("p", at, (0, y.v_)(s.description), 1), s.schema ? ((0, o.uX)(), (0, o.CE)("div", nt, [t[22] || (t[22] = (0, o.Lk)("h4", null, "Schema:", -1)), (0, o.Lk)("pre", null, (0, y.v_)(JSON.stringify(s.schema, null, 2)), 1)])) : (0, o.Q3)("", !0)])], 10, tt)))), 128))])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0)]), (0, o.Lk)("div", lt, [(0, o.Lk)("button", { onClick: (0, r.D$)((t => l.toggleConnection(e)), ["stop"]), class: (0, y.C4)({ connected: "connected" === e.status }), disabled: "connecting" === e.status || "disconnecting" === e.status }, (0, y.v_)(l.getConnectionButtonText(e)), 11, it), (0, o.Lk)("button", { onClick: (0, r.D$)((t => l.removeServer(e)), ["stop"]), class: "btn-delete", disabled: "connecting" === e.status || "disconnecting" === e.status }, " Remove ", 8, ct)])], 10, Te)))), 128))]), n.selectedTool ? ((0, o.uX)(), (0, o.CE)("div", ut, [(0, o.Lk)("h3", null, (0, y.v_)(n.selectedTool.name) + " Parameters", 1), (0, o.Lk)("form", { onSubmit: t[7] || (t[7] = (0, r.D$)(((...e) => l.executeTool && l.executeTool(...e)), ["prevent"])) }, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.selectedTool.inputSchema.properties, ((e, t) => ((0, o.uX)(), (0, o.CE)("div", { key: t, class: "param-group" }, [(0, o.Lk)("label", { for: t }, (0, y.v_)(e.title || t), 9, dt), (0, o.bo)((0, o.Lk)("input", { id: t, "onUpdate:modelValue": e => n.toolParams[t] = e, type: l.getInputType(e), placeholder: e.description, required: n.selectedTool.inputSchema.required?.includes(t) }, null, 8, mt), [[r.hp, n.toolParams[t]]])])))), 128)), (0, o.Lk)("button", { type: "submit", class: "btn-execute", disabled: n.isExecuting }, (0, y.v_)(n.isExecuting ? "Executing..." : "Execute Tool"), 9, pt)], 32), n.toolResult ? ((0, o.uX)(), (0, o.CE)("div", ht, [t[23] || (t[23] = (0, o.Lk)("h4", null, "Execution Result", -1)), (0, o.Lk)("div", vt, [(0, o.Lk)("pre", null, (0, y.v_)("object" === typeof n.toolResult ? JSON.stringify(n.toolResult, null, 2) : n.toolResult), 1)])])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), n.selectedPrompt ? ((0, o.uX)(), (0, o.CE)("div", gt, [(0, o.Lk)("h3", null, (0, y.v_)(n.selectedPrompt.name) + " Parameters", 1), (0, o.Lk)("form", { onSubmit: t[8] || (t[8] = (0, r.D$)(((...e) => l.getPrompt && l.getPrompt(...e)), ["prevent"])) }, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.selectedPrompt.arguments, (e => ((0, o.uX)(), (0, o.CE)("div", { key: e.name, class: "param-group" }, [(0, o.Lk)("label", { for: e.name }, (0, y.v_)(e.name), 9, kt), (0, o.bo)((0, o.Lk)("input", { id: e.name, "onUpdate:modelValue": t => n.promptParams[e.name] = t, type: "text", placeholder: e.description || `Enter ${e.name}`, required: e.required }, null, 8, ft), [[r.Jo, n.promptParams[e.name]]])])))), 128)), (0, o.Lk)("button", { type: "submit", class: "btn-execute", disabled: n.isExecuting }, (0, y.v_)(n.isExecuting ? "Executing..." : "Get Prompt"), 9, Lt)], 32), n.promptResult ? ((0, o.uX)(), (0, o.CE)("div", yt, [t[24] || (t[24] = (0, o.Lk)("h4", null, "Execution Result", -1)), (0, o.Lk)("div", bt, [(0, o.Lk)("pre", null, (0, y.v_)("object" === typeof n.promptResult ? JSON.stringify(n.promptResult, null, 2) : n.promptResult), 1)])])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), n.selectedResource ? ((0, o.uX)(), (0, o.CE)("div", wt, [(0, o.Lk)("h3", null, (0, y.v_)(n.selectedResource.name) + " Parameters", 1), (0, o.Lk)("form", { onSubmit: t[9] || (t[9] = (0, r.D$)(((...e) => l.fetchResource && l.fetchResource(...e)), ["prevent"])) }, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.selectedResource.parameters, ((e, t) => ((0, o.uX)(), (0, o.CE)("div", { key: t, class: "param-group" }, [(0, o.Lk)("label", { for: t }, (0, y.v_)(t), 9, Et), (0, o.bo)((0, o.Lk)("input", { id: t, "onUpdate:modelValue": e => n.resourceParams[t] = e, type: "text", placeholder: e.description, required: e.required }, null, 8, Ct), [[r.Jo, n.resourceParams[t]]])])))), 128)), (0, o.Lk)("button", { type: "submit", class: "btn-execute", disabled: n.isExecuting }, (0, y.v_)(n.isExecuting ? "Fetching..." : "Fetch Resource"), 9, Tt)], 32), n.resourceResult ? ((0, o.uX)(), (0, o.CE)("div", Rt, [t[25] || (t[25] = (0, o.Lk)("h4", null, "Resource Content", -1)), (0, o.Lk)("div", St, [(0, o.Lk)("pre", null, (0, y.v_)("object" === typeof n.resourceResult ? JSON.stringify(n.resourceResult, null, 2) : n.resourceResult), 1)])])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), n.selectedResourceTemplate ? ((0, o.uX)(), (0, o.CE)("div", _t, [(0, o.Lk)("h3", null, (0, y.v_)(n.selectedResourceTemplate.name) + " Parameters", 1), (0, o.Lk)("div", Pt, [t[26] || (t[26] = (0, o.Lk)("h4", null, "Template URL:", -1)), (0, o.Lk)("pre", null, (0, y.v_)(n.selectedResourceTemplate.uriTemplate), 1)]), (0, o.Lk)("form", { onSubmit: t[10] || (t[10] = (0, r.D$)(((...e) => l.fetchResourceFromTemplate && l.fetchResourceFromTemplate(...e)), ["prevent"])) }, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.urlParameters, (e => ((0, o.uX)(), (0, o.CE)("div", { key: e.name, class: "param-group" }, [(0, o.Lk)("label", { for: e.name }, (0, y.v_)(e.name), 9, xt), (0, o.bo)((0, o.Lk)("input", { id: e.name, "onUpdate:modelValue": t => n.resourceTemplateParams[e.name] = t, type: "text", placeholder: e.description, required: e.required }, null, 8, Xt), [[r.Jo, n.resourceTemplateParams[e.name]]])])))), 128)), (0, o.Lk)("button", { type: "submit", class: "btn-execute", disabled: n.isExecuting }, (0, y.v_)(n.isExecuting ? "Fetching..." : "Fetch Resource"), 9, Ft)], 32), n.resourceTemplateResult ? ((0, o.uX)(), (0, o.CE)("div", Mt, [t[27] || (t[27] = (0, o.Lk)("h4", null, "Execution Result", -1)), (0, o.Lk)("div", jt, [(0, o.Lk)("pre", null, (0, y.v_)("object" === typeof n.resourceTemplateResult ? JSON.stringify(n.resourceTemplateResult, null, 2) : n.resourceTemplateResult), 1)])])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0)])) : (0, o.Q3)("", !0), "chat" === n.activeTab ? ((0, o.uX)(), (0, o.CE)("div", At, [(0, o.Lk)("div", Ot, [(0, o.Lk)("div", It, [(0, o.Lk)("div", $t, [(0, o.bo)((0, o.Lk)("textarea", { "onUpdate:modelValue": t[11] || (t[11] = e => n.chatInput = e), placeholder: "Enter chat content to list tools", class: "tools-input", rows: "4" }, null, 512), [[r.Jo, n.chatInput]]), (0, o.Lk)("div", Ut, [(0, o.Lk)("button", { onClick: t[12] || (t[12] = (...e) => l.listToolsOfChat && l.listToolsOfChat(...e)), class: "btn-list-tools", disabled: n.isExecuting }, (0, y.v_)(n.isExecuting ? "Loading..." : "List Tools"), 9, Dt)])]), n.listToolsResult ? ((0, o.uX)(), (0, o.CE)("div", Jt, [t[28] || (t[28] = (0, o.Lk)("h4", null, "Tools Found:", -1)), (0, o.Lk)("div", qt, [(0, o.Lk)("pre", null, (0, y.v_)(JSON.stringify(n.listToolsResult, null, 2)), 1)])])) : (0, o.Q3)("", !0)])]), (0, o.Lk)("div", Qt, [(0, o.Lk)("div", Vt, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(n.chatMessages, ((e, t) => ((0, o.uX)(), (0, o.CE)("div", { key: t, class: (0, y.C4)(["message", e.type]) }, [(0, o.Lk)("div", Kt, (0, y.v_)(e.content), 1)], 2)))), 128))]), (0, o.Lk)("div", Nt, [(0, o.bo)((0, o.Lk)("textarea", { "onUpdate:modelValue": t[13] || (t[13] = e => n.newMessage = e), placeholder: "Type your message...", onKeyup: t[14] || (t[14] = (0, r.jR)(((...e) => l.sendMessage && l.sendMessage(...e)), ["enter"])) }, null, 544), [[r.Jo, n.newMessage]]), (0, o.Lk)("button", { onClick: t[15] || (t[15] = (...e) => l.sendMessage && l.sendMessage(...e)), class: "btn-send" }, "Send")])])])) : (0, o.Q3)("", !0)])])]) } s(116), s(7588); const Ht = "http://localhost:14000/api"; var Bt = { name: "ServerManager", data() { return { servers: [], selectedServer: null, selectedTool: null, selectedPrompt: null, selectedResource: null, selectedResourceTemplate: null, toolParams: {}, promptParams: {}, resourceParams: {}, resourceTemplateParams: {}, toolResult: null, promptResult: null, resourceResult: null, resourceTemplateResult: null, isExecuting: !1, newServer: { name: "", url: "" }, urlError: "", urlParameters: [], activeTab: "server", chatMessages: [], newMessage: "", chatInput: "", listToolsResult: null } }, async created() { await this.fetchServers() }, methods: { validateUrl() { try { if (!this.newServer.url) return void (this.urlError = ""); const e = new URL(this.newServer.url); if (!["http:", "https:"].includes(e.protocol)) return void (this.urlError = "URL must use http or https protocol"); this.urlError = "" } catch (e) { this.urlError = "Please enter a valid URL" } }, async fetchServers() { try { const e = await fetch(`${Ht}/servers`); if (!e.ok) throw new Error("Failed to fetch servers"); this.servers = await e.json() } catch (e) { console.error("Error fetching servers:", e) } }, async addServer() { if (!this.urlError) try { const e = await fetch(`${Ht}/add_server`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: this.newServer.url, name: this.newServer.name }) }); if (!e.ok) throw new Error("Failed to add server"); this.newServer.name = "", this.newServer.url = "", this.urlError = "", await this.fetchServers() } catch (e) { console.error("Error adding server:", e) } }, async removeServer(e) { try { const t = await fetch(`${Ht}/remove_server?name=${encodeURIComponent(e.name)}`, { method: "DELETE" }); if (!t.ok) throw new Error("Failed to remove server"); this.selectedServer?.name === e.name && (this.selectedServer = null), await this.fetchServers() } catch (t) { console.error("Error removing server:", t) } }, selectServer(e) { this.selectedServer = e, this.$emit("server-selected", e) }, async toggleConnection(e) { try { const t = "connected" === e.status; if (e.status = t ? "disconnecting" : "connecting", t) { const t = await fetch(`${Ht}/disconnect_server?name=${e.name}`, { method: "POST" }); if (!t.ok) throw new Error("Failed to disconnect from server"); const s = await t.json(); if ("success" !== s.status) throw new Error(s.message || "Failed to disconnect from server"); { await this.fetchServers(); const t = this.servers.find((t => t.name === e.name)); t && this.selectServer(t) } } else { const t = await fetch(`${Ht}/connect_server?name=${e.name}`, { method: "POST" }); if (!t.ok) throw new Error("Failed to connect to server"); const s = await t.json(); if ("success" !== s.status) throw new Error(s.message || "Failed to connect to server"); { await this.fetchServers(); const t = this.servers.find((t => t.name === e.name)); t && this.selectServer(t) } } } catch (t) { console.error("Connection error:", t), e.status = "error" } }, getConnectionButtonText(e) { switch (e.status) { case "connected": return "Disconnect"; case "connecting": return "Connecting..."; case "disconnecting": return "Disconnecting..."; case "error": return "Retry Connection"; default: return "Connect" } }, selectTool(e, t) { this.selectedTool = t, this.selectedPrompt = null, this.selectedResource = null, this.selectedResourceTemplate = null, this.toolParams = {} }, selectPrompt(e, t) { this.selectedPrompt = t, this.selectedTool = null, this.selectedResource = null, this.selectedResourceTemplate = null, this.promptParams = {}, t.arguments && t.arguments.forEach((e => { this.promptParams[e.name] = "" })) }, selectResource(e, t) { this.selectedResource = t, this.selectedTool = null, this.selectedPrompt = null, this.selectedResourceTemplate = null, this.resourceParams = {} }, selectResourceTemplate(e, t) { if (this.selectedResourceTemplate = t, this.selectedTool = null, this.selectedPrompt = null, this.selectedResource = null, this.resourceTemplateParams = {}, t.uriTemplate) { const e = /\{([^}]+)\}/g; let s; const r = []; while (null !== (s = e.exec(t.uriTemplate))) { const e = s[1]; r.push({ name: e, key: e, description: `Enter value for ${e}`, required: !0 }) } this.urlParameters = r } else this.urlParameters = [] }, getInputType(e) { switch (e.type) { case "number": case "integer": return "number"; case "boolean": return "checkbox"; default: return "text" } }, async executeTool() { try { this.isExecuting = !0, this.toolResult = null; const e = await fetch(`${Ht}/execute_tool`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ server: this.selectedServer.name, tool: this.selectedTool.name, parameters: this.toolParams }) }); if (!e.ok) throw new Error("Failed to execute tool"); const t = await e.json(); this.toolResult = t } catch (e) { console.error("Error executing tool:", e), this.toolResult = { error: e.message } } finally { this.isExecuting = !1 } }, async getPrompt() { try { if (!this.selectedServer || !this.selectedPrompt) throw new Error("Please select a server and prompt first"); this.isExecuting = !0, this.promptResult = null; const e = await fetch(`${Ht}/get_prompt`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ server: this.selectedServer.name, prompt: this.selectedPrompt.name, parameters: this.promptParams }) }); if (!e.ok) throw new Error("Failed to get prompt"); const t = await e.json(); this.promptResult = t } catch (e) { console.error("Error getting prompt:", e), this.promptResult = { error: e.message } } finally { this.isExecuting = !1 } }, async fetchResource() { try { if (!this.selectedServer || !this.selectedResource) throw new Error("Please select a server and resource first"); this.isExecuting = !0, this.resourceResult = null; const e = await fetch(`${Ht}/fetch_resource`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ server: this.selectedServer.name, resource: this.selectedResource.name }) }); if (!e.ok) throw new Error("Failed to fetch resource"); const t = await e.json(); this.resourceResult = t } catch (e) { console.error("Error fetching resource:", e), this.resourceResult = { error: e.message } } finally { this.isExecuting = !1 } }, async fetchResourceFromTemplate() { try { if (!this.selectedServer || !this.selectedResourceTemplate) throw new Error("Please select a server and resource template first"); this.isExecuting = !0, this.resourceTemplateResult = null; let e = this.selectedResourceTemplate.uriTemplate; for (const r of this.urlParameters) { const t = this.resourceTemplateParams[r.name]; if (!t && r.required) throw new Error(`Missing required parameter: ${r.name}`); e = e.replace(`{${r.name}}`, encodeURIComponent(t)) } const t = await fetch(`${Ht}/fetch_resource`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ server: this.selectedServer.name, resource: e }) }); if (!t.ok) throw new Error("Failed to fetch resource from template"); const s = await t.json(); this.resourceTemplateResult = s } catch (e) { console.error("Error fetching resource from template:", e), this.resourceTemplateResult = { error: e.message } } finally { this.isExecuting = !1 } }, sendMessage() { this.newMessage.trim() && (this.chatMessages.push({ type: "user", content: this.newMessage }), setTimeout((() => { this.chatMessages.push({ type: "assistant", content: "This is a placeholder response. API integration needed." }) }), 1e3), this.newMessage = "") }, async listToolsOfChat() { try { this.isExecuting = !0, this.listToolsResult = null; const e = await fetch(`${Ht}/dev/list_tool_of_chat`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: this.chatInput }) }); if (!e.ok) throw new Error("Failed to list tools of chat"); const t = await e.json(); this.listToolsResult = t } catch (e) { console.error("Error listing tools of chat:", e), this.listToolsResult = { error: e.message } } finally { this.isExecuting = !1 } } } }; const Yt = (0, d.A)(Bt, [["render", Wt], ["__scopeId", "data-v-0b67d2e8"]]); var zt = Yt, Gt = { name: "ServerManagerView", components: { ServerManager: zt } }; const Zt = (0, d.A)(Gt, [["render", de], ["__scopeId", "data-v-3779f358"]]); var es = Zt, ts = (0, i.y$)({ state: { isAuthenticated: !1, user: null, registrationError: null, loginError: null }, mutations: { setAuthenticated(e, t) { e.isAuthenticated = t }, setUser(e, t) { e.user = t }, setRegistrationError(e, t) { e.registrationError = t }, setLoginError(e, t) { e.loginError = t } }, actions: { async register({ commit: e }, t) { try { const s = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }), r = await s.json(); if (!s.ok) throw new Error(r.detail || "Registration failed"); return e("setRegistrationError", null), r } catch (s) { throw e("setRegistrationError", s.message), s } }, async login({ commit: e }, t) { try { const s = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }), r = await s.json(); if (!s.ok) throw new Error(r.detail || "Login failed"); localStorage.setItem("token", r.access_token); const o = await fetch("/api/auth/me", { headers: { Authorization: `Bearer ${r.access_token}` } }); if (!o.ok) throw new Error("Failed to get user info"); const a = await o.json(); return e("setUser", a), e("setAuthenticated", !0), e("setLoginError", null), a } catch (s) { throw e("setUser", null), e("setAuthenticated", !1), e("setLoginError", s.message), s } }, logout({ commit: e }) { localStorage.removeItem("token"), e("setUser", null), e("setAuthenticated", !1) } }, getters: { isAuthenticated: e => e.isAuthenticated, user: e => e.user, registrationError: e => e.registrationError, loginError: e => e.loginError } }); const ss = [{ path: "/", name: "home", component: L, meta: { requiresAuth: !0 } }, { path: "/chat", name: "chat", component: O, meta: { requiresAuth: !0 } }, { path: "/server-manager", name: "server-manager", component: es, meta: { requiresAuth: !0 } }, { path: "/login", name: "login", component: B, meta: { guest: !0 } }, { path: "/register", name: "register", component: ie, meta: { guest: !0 } }], rs = (0, c.aE)({ history: (0, c.LA)("/"), routes: ss }); rs.beforeEach(((e, t, s) => { const r = ts.getters.isAuthenticated; e.matched.some((e => e.meta.requiresAuth)) ? r ? s() : s("/login") : e.matched.some((e => e.meta.guest)) && r ? s("/") : s() })); var os = rs; const as = (0, r.Ef)(p); as.use(os), as.use(ts), as.mount("#app") } }, t = {}; function s(r) { var o = t[r]; if (void 0 !== o) return o.exports; var a = t[r] = { exports: {} }; return e[r].call(a.exports, a, a.exports, s), a.exports } s.m = e, function () { var e = []; s.O = function (t, r, o, a) { if (!r) { var n = 1 / 0; for (u = 0; u < e.length; u++) { r = e[u][0], o = e[u][1], a = e[u][2]; for (var l = !0, i = 0; i < r.length; i++)(!1 & a || n >= a) && Object.keys(s.O).every((function (e) { return s.O[e](r[i]) })) ? r.splice(i--, 1) : (l = !1, a < n && (n = a)); if (l) { e.splice(u--, 1); var c = o(); void 0 !== c && (t = c) } } return t } a = a || 0; for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)e[u] = e[u - 1]; e[u] = [r, o, a] } }(), function () { s.d = function (e, t) { for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) } }(), function () { s.g = function () { if ("object" === typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" === typeof window) return window } }() }(), function () { s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) } }(), function () { var e = { 524: 0 }; s.O.j = function (t) { return 0 === e[t] }; var t = function (t, r) { var o, a, n = r[0], l = r[1], i = r[2], c = 0; if (n.some((function (t) { return 0 !== e[t] }))) { for (o in l) s.o(l, o) && (s.m[o] = l[o]); if (i) var u = i(s) } for (t && t(r); c < n.length; c++)a = n[c], s.o(e, a) && e[a] && e[a][0](), e[a] = 0; return s.O(u) }, r = self["webpackChunkmcp_chat"] = self["webpackChunkmcp_chat"] || []; r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r)) }(); var r = s.O(void 0, [504], (function () { return s(3753) })); r = s.O(r) })();
//# sourceMappingURL=app.3a610b3e.js.map