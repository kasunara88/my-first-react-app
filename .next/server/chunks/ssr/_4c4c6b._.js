module.exports = {

"[project]/app/libs/api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/ky/distribution/index.js [app-ssr] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].create({
    prefixUrl: ("TURBOPACK compile-time value", "http://localhost:3000/api/v1/"),
    timeout: 60000,
    retry: 0
});
}}),
"[project]/app/libs/apis/server.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getMovies": (()=>getMovies),
    "loginUser": (()=>loginUser),
    "registerUser": (()=>registerUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$libs$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/libs/api.js [app-ssr] (ecmascript)");
;
const loginUser = async (loginData)=>{
    const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        body: JSON.stringify({
            email: loginData?.email,
            password: loginData?.password
        })
    });
    console.log("LOGIN ACTION", response.json());
};
const registerUser = async (formData)=>{
    try {
        // console.log("Registration Data", formData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$libs$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("register", {
            json: formData
        });
        // console.log("Registration response", response);
        if (response.ok) {
            return response.json();
        } else {
            return undefined;
        }
    } catch (error) {
        const status = error.response.status;
        const responseBody = await error.response.json();
        if (status & responseBody) {
            if (status === 409) {
                return responseBody;
            }
            return undefined;
        }
        return undefined;
    }
};
const getMovies = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$libs$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("movies", {
            caches: "no-store"
        });
        if (response.ok) {
            return response.json();
        } else {
            return {
                error: true,
                message: "Something went wrong"
            };
        }
    } catch (error) {
        if (error) {
            const status = error?.response?.status; // HTTP status code (e.g. 404, 500)
            const responseBody = await error?.response?.json(); // JSON data parsed from response body
            console.log("HTTP ERROR", status, responseBody);
        } else {
            // Handle non-HTTP errors (e.g. network down, server down)
            console.log("Unknown Error : ", error);
        }
        return undefined;
    }
};
}}),
"[project]/app/login/login-form.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoginForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Cliend side component for the login form
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$libs$2f$apis$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/libs/apis/server.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LoginForm() {
    const [email, setemail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setpasword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [emailError, setemailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [passwordError, setpasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const validateForm = ()=>{
        if (!email) {
            setemailError('Email is required');
            return false;
        } else {
            setemailError('');
        }
        if (!password) {
            setpasswordError('Password is required');
            return false;
        } else {
            setpasswordError('');
        }
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const login = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$libs$2f$apis$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])({
                email: email,
                password: password
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[500px] ex-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-md border-gray-300 rounded-lg p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-center",
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "text-sm font-semibold texet-gray-900 block mb-2",
                                children: "E mail"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "emial",
                                id: "email",
                                name: "email",
                                value: email,
                                onChange: (e)=>setemail(e.target.value),
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                placeholder: "Enter your email"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-600 text-sm mt-2 ml-2",
                                children: emailError
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "Password",
                                className: "text-sm font-semibold texet-gray-900 block mb-2",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                id: "password",
                                name: "password",
                                value: password,
                                onChange: (e)=>setpasword(e.target.value),
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                placeholder: "................"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-600 text-sm mt-2 ml-2",
                                children: passwordError
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center h-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "remeber",
                                            type: "checkbox",
                                            className: "bg-gray-50 border border-gray-300 focus-ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/login-form.jsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/login-form.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "remeber",
                                            className: "font-medium",
                                            children: "Remember me"
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/login-form.jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/login-form.jsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/forget-pasword",
                                className: "text-sm text-gray-800 font-semibold hover:underline ml-auto",
                                children: "Forget Password?"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                        children: [
                            "Sign In",
                            ' '
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center text-sm font-medium text-gray-500 space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Don't have an account yet?"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/register",
                                className: "font-medium text-blue-800 text-primary-600 hover:underline dark:text-primary-500",
                                children: "Sign up"
                            }, void 0, false, {
                                fileName: "[project]/app/login/login-form.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/login-form.jsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/login-form.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/login/login-form.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/login/login-form.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/login/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/ky/distribution/core/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "kyOptionKeys": (()=>kyOptionKeys),
    "maxSafeTimeout": (()=>maxSafeTimeout),
    "requestMethods": (()=>requestMethods),
    "requestOptionsRegistry": (()=>requestOptionsRegistry),
    "responseTypes": (()=>responseTypes),
    "stop": (()=>stop),
    "supportsAbortController": (()=>supportsAbortController),
    "supportsFormData": (()=>supportsFormData),
    "supportsRequestStreams": (()=>supportsRequestStreams),
    "supportsResponseStreams": (()=>supportsResponseStreams)
});
const supportsRequestStreams = (()=>{
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        try {
            hasContentType = new globalThis.Request('https://empty.invalid', {
                body: new globalThis.ReadableStream(),
                method: 'POST',
                // @ts-expect-error - Types are outdated.
                get duplex () {
                    duplexAccessed = true;
                    return 'half';
                }
            }).headers.has('Content-Type');
        } catch (error) {
            // QQBrowser on iOS throws "unsupported BodyInit type" error (see issue #581)
            if (error instanceof Error && error.message === 'unsupported BodyInit type') {
                return false;
            }
            throw error;
        }
    }
    return duplexAccessed && !hasContentType;
})();
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
const validate = ()=>undefined;
validate();
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
};
const maxSafeTimeout = 2_147_483_647;
const stop = Symbol('stop');
const kyOptionKeys = {
    json: true,
    parseJson: true,
    stringifyJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    fetch: true
};
const requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    dispatcher: true,
    duplex: true,
    priority: true
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/ky/distribution/errors/HTTPError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HTTPError": (()=>HTTPError)
});
class HTTPError extends Error {
    response;
    request;
    options;
    constructor(response, request, options){
        const code = response.status || response.status === 0 ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}: ${request.method} ${request.url}`);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
} //# sourceMappingURL=HTTPError.js.map
}}),
"[project]/node_modules/ky/distribution/utils/is.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/ban-types
__turbopack_esm__({
    "isObject": (()=>isObject)
});
const isObject = (value)=>value !== null && typeof value === 'object'; //# sourceMappingURL=is.js.map
}}),
"[project]/node_modules/ky/distribution/utils/merge.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deepMerge": (()=>deepMerge),
    "mergeHeaders": (()=>mergeHeaders),
    "mergeHooks": (()=>mergeHooks),
    "validateAndMerge": (()=>validateAndMerge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/is.js [app-ssr] (ecmascript)");
;
const validateAndMerge = (...sources)=>{
    for (const source of sources){
        if ((!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(source) || Array.isArray(source)) && source !== undefined) {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {})=>{
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()){
        if (isHeadersInstance && value === 'undefined' || value === undefined) {
            result.delete(key);
        } else {
            result.set(key, value);
        }
    }
    return result;
};
function newHookValue(original, incoming, property) {
    return Object.hasOwn(incoming, property) && incoming[property] === undefined ? [] : deepMerge(original[property] ?? [], incoming[property] ?? []);
}
const mergeHooks = (original = {}, incoming = {})=>({
        beforeRequest: newHookValue(original, incoming, 'beforeRequest'),
        beforeRetry: newHookValue(original, incoming, 'beforeRetry'),
        afterResponse: newHookValue(original, incoming, 'afterResponse'),
        beforeError: newHookValue(original, incoming, 'beforeError')
    });
const deepMerge = (...sources)=>{
    let returnValue = {};
    let headers = {};
    let hooks = {};
    for (const source of sources){
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [
                ...returnValue,
                ...source
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(source)) {
            for (let [key, value] of Object.entries(source)){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = {
                    ...returnValue,
                    [key]: value
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(source.hooks)) {
                hooks = mergeHooks(hooks, source.hooks);
                returnValue.hooks = hooks;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
}; //# sourceMappingURL=merge.js.map
}}),
"[project]/node_modules/ky/distribution/utils/normalize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "normalizeRequestMethod": (()=>normalizeRequestMethod),
    "normalizeRetryOptions": (()=>normalizeRetryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/core/constants.js [app-ssr] (ecmascript)");
;
const normalizeRequestMethod = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestMethods"].includes(input) ? input.toUpperCase() : input;
const retryMethods = [
    'get',
    'put',
    'head',
    'delete',
    'options',
    'trace'
];
const retryStatusCodes = [
    408,
    413,
    429,
    500,
    502,
    503,
    504
];
const retryAfterStatusCodes = [
    413,
    429,
    503
];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: (attemptCount)=>0.3 * 2 ** (attemptCount - 1) * 1000
};
const normalizeRetryOptions = (retry = {})=>{
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return {
        ...defaultRetryOptions,
        ...retry
    };
}; //# sourceMappingURL=normalize.js.map
}}),
"[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TimeoutError": (()=>TimeoutError)
});
class TimeoutError extends Error {
    request;
    constructor(request){
        super(`Request timed out: ${request.method} ${request.url}`);
        this.name = 'TimeoutError';
        this.request = request;
    }
} //# sourceMappingURL=TimeoutError.js.map
}}),
"[project]/node_modules/ky/distribution/utils/delay.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
__turbopack_esm__({
    "default": (()=>delay)
});
async function delay(ms, { signal }) {
    return new Promise((resolve, reject)=>{
        if (signal) {
            signal.throwIfAborted();
            signal.addEventListener('abort', abortHandler, {
                once: true
            });
        }
        function abortHandler() {
            clearTimeout(timeoutId);
            reject(signal.reason);
        }
        const timeoutId = setTimeout(()=>{
            signal?.removeEventListener('abort', abortHandler);
            resolve();
        }, ms);
    });
} //# sourceMappingURL=delay.js.map
}}),
"[project]/node_modules/ky/distribution/utils/options.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findUnknownOptions": (()=>findUnknownOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/core/constants.js [app-ssr] (ecmascript)");
;
const findUnknownOptions = (request, options)=>{
    const unknownOptions = {};
    for(const key in options){
        if (!(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestOptionsRegistry"]) && !(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kyOptionKeys"]) && !(key in request)) {
            unknownOptions[key] = options[key];
        }
    }
    return unknownOptions;
}; //# sourceMappingURL=options.js.map
}}),
"[project]/node_modules/ky/distribution/utils/timeout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>timeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-ssr] (ecmascript)");
;
async function timeout(request, init, abortController, options) {
    return new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            if (abortController) {
                abortController.abort();
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeoutError"](request));
        }, options.timeout);
        void options.fetch(request, init).then(resolve).catch(reject).then(()=>{
            clearTimeout(timeoutId);
        });
    });
} //# sourceMappingURL=timeout.js.map
}}),
"[project]/node_modules/ky/distribution/core/Ky.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Ky": (()=>Ky)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/core/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/errors/HTTPError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/delay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/options.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/timeout.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class Ky {
    static create(input, options) {
        const ky = new Ky(input, options);
        const function_ = async ()=>{
            if (typeof ky._options.timeout === 'number' && ky._options.timeout > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxSafeTimeout"]) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxSafeTimeout"]}`);
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            let response = await ky._fetch();
            for (const hook of ky._options.hooks.afterResponse){
                // eslint-disable-next-line no-await-in-loop
                const modifiedResponse = await hook(ky.request, ky._options, ky._decorateResponse(response.clone()));
                if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                }
            }
            ky._decorateResponse(response);
            if (!response.ok && ky._options.throwHttpErrors) {
                let error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HTTPError"](response, ky.request, ky._options);
                for (const hook of ky._options.hooks.beforeError){
                    // eslint-disable-next-line no-await-in-loop
                    error = await hook(error);
                }
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            /* istanbul ignore next */ if (ky._options.onDownloadProgress) {
                if (typeof ky._options.onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsResponseStreams"]) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                return ky._stream(response.clone(), ky._options.onDownloadProgress);
            }
            return response;
        };
        const isRetriableMethod = ky._options.retry.methods.includes(ky.request.method.toLowerCase());
        const result = isRetriableMethod ? ky._retry(function_) : function_();
        for (const [type, mimeType] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["responseTypes"])){
            result[type] = async ()=>{
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                const response = await result;
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const arrayBuffer = await response.clone().arrayBuffer();
                    const responseSize = arrayBuffer.byteLength;
                    if (responseSize === 0) {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(await response.text());
                    }
                }
                return response[type]();
            };
        }
        return result;
    }
    request;
    abortController;
    _retryCount = 0;
    _input;
    _options;
    // eslint-disable-next-line complexity
    constructor(input, options = {}){
        this._input = input;
        this._options = {
            ...options,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeHeaders"])(this._input.headers, options.headers),
            hooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeHooks"])({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRequestMethod"])(options.method ?? this._input.method),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRetryOptions"])(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: options.timeout ?? 10_000,
            fetch: options.fetch ?? globalThis.fetch.bind(globalThis)
        };
        if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if (this._options.prefixUrl && typeof this._input === 'string') {
            if (this._input.startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!this._options.prefixUrl.endsWith('/')) {
                this._options.prefixUrl += '/';
            }
            this._input = this._options.prefixUrl + this._input;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsAbortController"]) {
            this.abortController = new globalThis.AbortController();
            const originalSignal = this._options.signal ?? this._input.signal;
            if (originalSignal?.aborted) {
                this.abortController.abort(originalSignal?.reason);
            }
            originalSignal?.addEventListener('abort', ()=>{
                this.abortController.abort(originalSignal.reason);
            });
            this._options.signal = this.abortController.signal;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
            // @ts-expect-error - Types are outdated.
            this._options.duplex = 'half';
        }
        if (this._options.json !== undefined) {
            this._options.body = this._options.stringifyJson?.(this._options.json) ?? JSON.stringify(this._options.json);
            this._options.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json');
        }
        this.request = new globalThis.Request(this._input, this._options);
        if (this._options.searchParams) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof this._options.searchParams === 'string' ? this._options.searchParams.replace(/^\?/, '') : new URLSearchParams(this._options.searchParams).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
            if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsFormData"] && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
                this.request.headers.delete('content-type');
            }
            // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
            this.request = new globalThis.Request(new globalThis.Request(url, {
                ...this.request
            }), this._options);
        }
    }
    _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount > this._options.retry.limit || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeoutError"]) {
            throw error;
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HTTPError"]) {
            if (!this._options.retry.statusCodes.includes(error.response.status)) {
                throw error;
            }
            const retryAfter = error.response.headers.get('Retry-After') ?? error.response.headers.get('RateLimit-Reset') ?? error.response.headers.get('X-RateLimit-Reset') // GitHub
             ?? error.response.headers.get('X-Rate-Limit-Reset'); // Twitter
            if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
                let after = Number(retryAfter) * 1000;
                if (Number.isNaN(after)) {
                    after = Date.parse(retryAfter) - Date.now();
                } else if (after >= Date.parse('2024-01-01')) {
                    // A large number is treated as a timestamp (fixed threshold protects against clock skew)
                    after -= Date.now();
                }
                const max = this._options.retry.maxRetryAfter ?? after;
                return after < max ? after : max;
            }
            if (error.response.status === 413) {
                throw error;
            }
        }
        const retryDelay = this._options.retry.delay(this._retryCount);
        return Math.min(this._options.retry.backoffLimit, retryDelay);
    }
    _decorateResponse(response) {
        if (this._options.parseJson) {
            response.json = async ()=>this._options.parseJson(await response.text());
        }
        return response;
    }
    async _retry(function_) {
        try {
            return await function_();
        } catch (error) {
            const ms = Math.min(this._calculateRetryDelay(error), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxSafeTimeout"]);
            if (this._retryCount < 1) {
                throw error;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ms, {
                signal: this._options.signal
            });
            for (const hook of this._options.hooks.beforeRetry){
                // eslint-disable-next-line no-await-in-loop
                const hookResult = await hook({
                    request: this.request,
                    options: this._options,
                    error: error,
                    retryCount: this._retryCount
                });
                // If `stop` is returned from the hook, the retry process is stopped
                if (hookResult === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stop"]) {
                    return;
                }
            }
            return this._retry(function_);
        }
    }
    async _fetch() {
        for (const hook of this._options.hooks.beforeRequest){
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this._options);
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) {
                return result;
            }
        }
        const nonRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findUnknownOptions"])(this.request, this._options);
        // Cloning is done here to prepare in advance for retries
        const mainRequest = this.request;
        this.request = mainRequest.clone();
        if (this._options.timeout === false) {
            return this._options.fetch(mainRequest, nonRequestOptions);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mainRequest, nonRequestOptions, this.abortController, this._options);
    }
    /* istanbul ignore next */ _stream(response, onDownloadProgress) {
        const totalBytes = Number(response.headers.get('content-length')) || 0;
        let transferredBytes = 0;
        if (response.status === 204) {
            if (onDownloadProgress) {
                onDownloadProgress({
                    percent: 1,
                    totalBytes,
                    transferredBytes
                }, new Uint8Array());
            }
            return new globalThis.Response(null, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        }
        return new globalThis.Response(new globalThis.ReadableStream({
            async start (controller) {
                const reader = response.body.getReader();
                if (onDownloadProgress) {
                    onDownloadProgress({
                        percent: 0,
                        transferredBytes: 0,
                        totalBytes
                    }, new Uint8Array());
                }
                async function read() {
                    const { done, value } = await reader.read();
                    if (done) {
                        controller.close();
                        return;
                    }
                    if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({
                            percent,
                            transferredBytes,
                            totalBytes
                        }, value);
                    }
                    controller.enqueue(value);
                    await read();
                }
                await read();
            }
        }), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }
} //# sourceMappingURL=Ky.js.map
}}),
"[project]/node_modules/ky/distribution/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*! MIT License © Sindre Sorhus */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/core/Ky.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/utils/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ky/distribution/core/constants.js [app-ssr] (ecmascript)");
;
;
;
const createInstance = (defaults)=>{
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options));
    for (const method of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestMethods"]){
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options, {
                method
            }));
    }
    ky.create = (newDefaults)=>createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAndMerge"])(newDefaults));
    ky.extend = (newDefaults)=>{
        if (typeof newDefaults === 'function') {
            newDefaults = newDefaults(defaults ?? {});
        }
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, newDefaults));
    };
    ky.stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stop"];
    return ky;
};
const ky = createInstance();
const __TURBOPACK__default__export__ = ky;
;
;
 //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=_4c4c6b._.js.map