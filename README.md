# Hướng Dẫn Cài Đặt và Chạy Dự Án

## 1. Thông Tin Nhóm
- **Hoàng Kim Hùng:** Xây dựng code xử lý yêu cầu từ khách hàng gửi đến chatbot (35%)
- **Phạm Minh Tuấn:** Thiết kế và xây dựng giao diện trang web và chatbot (34%)
- **Lê Trung Tiến:** Kiểm thử và xây dựng code xử lý API cho chatbot (31%)

## 2. Hướng Dẫn Chạy Source Code

### a. Cài Đặt Các Thư Viện Cần Thiết

#### a.1. Cài Đặt Node.js
- Tải và cài đặt Node.js từ trang chủ chính thức: [https://nodejs.org/](https://nodejs.org/).
- Sau khi cài đặt, kiểm tra phiên bản Node.js và npm:
 `node -v` hoặc `npm -v`

#### a.2. Clone dự án từ github về
- `git clone <url_dự_án>`

#### a.3. Cài đặt các thư viện cần thiêt
- Di chuyển đến thư mục của dự án sau khi clone về: `cd <thư_mục_dự_án>`
- Khởi tạo file package.json (nếu chưa có): `npm init -y`
- Cài đặt các thư viện: `npm install express cors node-fetch dotenv`

### b. Chạy dự án
#### b.1. Khởi động server backend
- `node node.js`
#### b.2. Chạy frontend
- Chạy file index.html

### LƯU Ý: Đảm bảo bạn đã có API Key của OpenAI trong file .env như sau:
```bash 
OPENAI_API_KEY=your_openai_api_key_here


