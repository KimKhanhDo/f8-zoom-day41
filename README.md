# Redux Advanced: Axios, ENV & Redux Architecture

# Yêu cầu chung

# Bài 1: Setup Axios với Environment Variables

# Bài 2: E-commerce App với Redux Architecture Pattern

# Redux Advanced: Axios, ENV & Redux Architecture

# Yêu cầu chung

Tạo repo f8-zoom-day41 sử dụng Vite để tạo dự án React với template JavaScript + SWC  
Deploy bài tập trên Github Pages sử dụng gh-pages  
Giao diện đơn giản nhưng professional (tự làm CSS)  
Mục tiêu chính: Master Redux architecture patterns, Axios integration, và environment variables

# Bài 1: Setup Axios với Environment Variables

## 1.1. Tạo HTTP Client với Axios

Tạo file `src/utils/http.js` với các yêu cầu:

-   Tạo axios instance với baseURL từ environment variable
-   Override các methods (get, post, put, patch, delete) để tránh phải gọi response.data.data
-   Export cả instance (httpClient) và wrapper object (http)
-   Handle errors một cách consistent

**Expected:** Khi gọi API, thay vì phải viết `response.data.data.items` thì chỉ cần `await http.get('/products')` và nhận được data trực tiếp.

## 1.2. Setup Environment Variables

-   Tạo file `.env.local` trong root folder:  
    Define `VITE_BASE_API` với URL của API: `https://api01.f8team.dev/api`
-   Tạo file `.env.example` (copy từ `.env.local` nhưng không chứa sensitive data) để commit lên git
-   Lưu ý: File `.env.local` sẽ không được commit lên git, còn `.env.example` sẽ được commit để người khác biết cần config gì.

# Bài 2: E-commerce App với Redux Architecture Pattern

## 2.1. Cấu trúc Redux theo Feature-based

```
src/
├── store/
│   ├── store.js # Configure store với middleware
│   ├── product/
│   │   ├── constants.js # Action types với namespace
│   │   ├── actions.js # Action creators & thunks
│   │   ├── reducer.js # Reducer logic
│   │   ├── selectors.js # Selector functions
│   │   ├── hooks.js # Custom hooks
│   │   └── index.js # Public exports
│   └── ui/
│       ├── constants.js
│       ├── actions.js
│       ├── reducer.js
│       ├── selectors.js
│       ├── hooks.js
│       └── index.js
├── pages/
│   ├── ProductList/
│   │   ├── index.jsx
│   │   └── ProductList.module.scss
│   └── ProductDetail/
│       ├── index.jsx
│       └── ProductDetail.module.scss
├── components/
│   ├── ProductCard/
│   │   ├── index.jsx
│   │   └── ProductCard.module.scss
│   └── Loading/
│       ├── index.jsx
│       └── Loading.module.scss
├── utils/
│   └── http.js
└── ...
```

## 2.2. Store Configuration

-   Import và configure redux-thunk để handle async actions
-   Import và configure redux-logger để debug (chỉ trong development)
-   Combine reducers từ các modules (product, ui)

## 2.3. Product Module Requirements

### Pages

-   Danh sách sản phẩm (`/products`): Hiển thị grid các sản phẩm
-   Chi tiết sản phẩm (`/products/:slug`): Hiển thị thông tin chi tiết

### API

-   Lấy danh sách sản phẩm: `GET /products`
-   Lấy chi tiết sản phẩm: `GET /products/:slug`

**Note về slug:** Slug là một trường định danh sản phẩm, không bị trùng lặp, thân thiện hơn khi hiển thị trên URL so với id. Ví dụ: `/products/iphone-15-pro-max` thay vì `/products/123`

### constants.js

-   Define namespace `"product"`
-   Action types: `GET_LIST`, `SET_LIST`, `GET_DETAIL`, `SET_DETAIL`

### actions.js

-   `getList()`: Thunk action để fetch danh sách products từ API
    -   Dispatch `GET_LIST` khi bắt đầu fetch
    -   Call API `/products`
    -   Dispatch `SET_LIST` với data nhận được
    -   Show/hide loading thông qua ui actions
-   `getDetail(slug)`: Thunk action để fetch product detail
    -   Dispatch `GET_DETAIL` khi bắt đầu fetch
    -   Call API `/products/:slug`
    -   Dispatch `SET_DETAIL` với data nhận được
    -   Show/hide loading thông qua ui actions
-   `setList(products)`: Plain action để set products vào store
-   `setDetail(product)`: Plain action để set product detail vào store

### reducer.js

-   Initial state: `{ list: [], detail: null }`
-   Handle các action types tương ứng
-   Important: Immutable updates, không mutate state trực tiếp

### selectors.js

-   `getProducts`: Select products list từ state
-   `getProductDetail`: Select product detail từ state

### hooks.js

-   `useProducts()`: Custom hook để get products list
-   `useProductDetail()`: Custom hook để get product detail

### index.js

-   Export tất cả modules (reducer, actions, constants, selectors, hooks)

## 2.4. UI Module Requirements

### Features

-   Global loading state để hiển thị loading overlay

### constants.js

-   Define namespace `"ui"`
-   Action types: `SHOW_LOADING`, `HIDE_LOADING`

### actions.js

-   `showLoading()`: Action để show loading
-   `hideLoading()`: Action để hide loading

### reducer.js

-   Initial state: `{ isLoading: false }`
-   Handle show/hide loading actions

### selectors.js

-   `getLoading`: Select loading state

### hooks.js

-   `useLoading()`: Custom hook để get loading state

## 2.5. Pages Implementation

### ProductList Page (`/products`)

-   Dispatch `getList()` khi component mount
-   Sử dụng `useProducts()` hook để lấy danh sách products
-   Sử dụng `useLoading()` hook để hiển thị loading state
-   Render grid các `ProductCard` components
-   Mỗi `ProductCard` có link tới `/products/:slug`

### ProductDetail Page (`/products/:slug`)

-   Lấy slug từ URL params
-   Dispatch `getDetail(slug)` khi component mount hoặc slug thay đổi
-   Sử dụng `useProductDetail()` hook để lấy product detail
-   Sử dụng `useLoading()` hook để hiển thị loading state
-   Render thông tin chi tiết sản phẩm
-   Có nút “Back to Products” để quay lại danh sách

### Loading Component

-   Global loading overlay với spinner
-   Hiển thị khi loading state là true
-   Position fixed, full screen với backdrop
