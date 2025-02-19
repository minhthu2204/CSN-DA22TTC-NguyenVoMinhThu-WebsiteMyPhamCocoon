# Website Giới Thiệu Mỹ Phẩm Cocoon

## Giới thiệu
Website giới thiệu và bán mỹ phẩm Cocoon được xây dựng bằng HTML, CSS và JavaScript. Website có các chức năng cơ bản như xem sản phẩm, thêm vào giỏ hàng, đọc bài viết và thanh toán.

## Công nghệ sử dụng
- HTML5
- CSS3 
- JavaScript
- W3.CSS Framework
- Font Awesome Icons
- LocalStorage để lưu giỏ hàng

## Hướng dẫn cài đặt và chạy trên máy cục bộ

### Yêu cầu hệ thống
- Trình duyệt web hiện đại (Chrome, Firefox, Edge,...)
- Text editor (VS Code, Sublime Text,...)
- Live Server extension (VS Code) hoặc web server cục bộ

### Các bước cài đặt

1. Tải source code
- Tải trực tiếp file zip từ repository
- Hoặc clone qua Git:
```bash
git clone https://github.com/minhthu2204/CSN-DA22TTC-NguyenVoMinhThu-WebsiteMyPhamCocoon
```

2. Giải nén (nếu tải file zip)
- Giải nén file zip vào thư mục mong muốn

3. Mở project
- Mở thư mục project bằng text editor
- Với VS Code: File > Open Folder > Chọn thư mục project

4. Cài đặt Live Server (VS Code)
- Mở VS Code Extensions
- Tìm "Live Server"
- Nhấn Install

5. Chạy website
- Click chuột phải vào file index.html
- Chọn "Open with Live Server"
- Website sẽ tự động mở trên trình duyệt mặc định

### Cấu trúc thư mục
```
cocoon-website/
├── index.html          # Trang chủ
├── product.html        # Trang sản phẩm
├── blog.html          # Trang bài viết
├── cart.html          # Trang giỏ hàng
├── blog-detail.html   # Trang chi tiết bài viết
├── css/               # Thư mục chứa file CSS
├── js/                # Thư mục chứa file JavaScript  
└── images/            # Thư mục chứa hình ảnh
```

## Lưu ý
- Đảm bảo có kết nối internet để tải các thư viện từ CDN
- Không xóa hoặc di chuyển các file trong thư mục
- Các hình ảnh cần đặt đúng đường dẫn trong thư mục images

## Người phát triển
- Họ tên: Nguyễn Võ Minh Thư
- MSSV: 110122174
## Công nghệ sử dụng



## Hướng dẫn chạy API

### 1. Cài đặt các dependencies
Server API sẽ chạy tại http://localhost:3000

### 3. Các API endpoints có sẵn:

- GET /api/products - Lấy tất cả sản phẩm
- GET /api/products/:id - Lấy sản phẩm theo ID
- GET /api/products/search/:keyword - Tìm kiếm sản phẩm theo từ khóa
- POST /api/products - Thêm sản phẩm mới

### 4. Cấu trúc dữ liệu
- Dữ liệu sản phẩm được lưu trong file data/products.json
- Mỗi sản phẩm có cấu trúc:

### 5. Lưu ý
- Đảm bảo Node.js đã được cài đặt trên máy
- Server API cần được chạy song song với web server
- Kiểm tra file data/products.json tồn tại và có quyền đọc/ghi


Để chạy API trong dự án này, bạn cần thực hiện các bước sau:
1. Đảm bảo đã cài đặt Node.js và npm

2. Cài đặt các dependencies cần thiết
npm install express cors

3. chạy server API bằng lệnh:
node app.js

4. sau khi chạy lệnh này, server API sẽ hoạt động tại http://localhost:3000 như được định nghĩa trong file app.js:
