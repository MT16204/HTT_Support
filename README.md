# HTT Support

## 1. Giới thiệu 
- Đây là môt dự án xây dựng website hỗ trợ khách hàng về các sự cố về phần mềm và phần cứng, có tích hợp thêm tính năng chatbot giúp người dùng có thể giải đáp thắc mắc ngay tức thì.

## 2. Thông Tin Nhóm
- **Hoàng Kim Hùng** 
- **Phạm Minh Tuấn** 
- **Lê Trung Tiến** 

## 3. Hướng Dẫn Chạy Source Code

### a. Cài Đặt Các Thư Viện Cần Thiết

#### a.1. Cài Đặt Node.js
- Tải và cài đặt Node.js từ trang chủ chính thức: [https://nodejs.org/](https://nodejs.org/).
- Sau khi cài đặt, kiểm tra phiên bản Node.js và npm:
 `node -v` hoặc `npm -v`

#### a.2. Clone dự án từ github về
- `git clone https://github.com/MT16204/HTT_Support`

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


