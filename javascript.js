// المصفوفة لتخزين المنتجات
let products = [];

// وظيفة لإضافة منتج جديد
document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const barcode = document.getElementById("barcode").value;
    const productName = document.getElementById("productName").value;
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productQuantity = parseInt(document.getElementById("productQuantity").value);

    if (!barcode || !productName || isNaN(productPrice) || isNaN(productQuantity)) {
        alert("يرجى ملء جميع الحقول بشكل صحيح.");
        return;
    }

    // إضافة المنتج إلى المصفوفة
    const product = {
        barcode: barcode,
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        total: productPrice * productQuantity
    };

    products.push(product);

    // تحديث جدول المنتجات
    displayProducts();
    
    // مسح الحقول بعد إضافة المنتج
    document.getElementById("barcode").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
});

// دالة لعرض المنتجات في الجدول
function displayProducts() {
    const tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = ""; // مسح الجدول الحالي

    let totalSales = 0;

    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.barcode}</td>
            <td>${product.name}</td>
            <td>${product.price} ريال</td>
            <td>${product.quantity}</td>
            <td>${product.total} ريال</td>
        `;
        tableBody.appendChild(row);

        totalSales += product.total;
    });

    // تحديث إجمالي المبيعات
    document.getElementById("totalSales").textContent = totalSales.toFixed(2);
}
