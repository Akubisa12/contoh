cara baca kode javascript 

Pertama-tama, kode melakukan parsing tanggal dari input pengguna dengan menggunakan objek Date().
Kemudian, objek birthDetails dibuat untuk menampung tanggal lahir yang diinput oleh pengguna, yaitu tanggal, bulan, dan tahun.
Objek today digunakan untuk menentukan tanggal hari ini, yaitu tanggal saat kode dijalankan.
Kode kemudian melakukan pengecekan apakah tanggal lahir yang diinput oleh pengguna lebih besar dari tanggal hari ini. Jika ya, maka kode akan langsung mengembalikan nilai 0 pada tahun, bulan, dan hari yang ditampilkan.
Jika tanggal lahir yang diinput oleh pengguna lebih kecil dari tanggal hari ini, maka kode akan terus berlanjut ke bagian selanjutnya.
Kode kemudian melakukan pengecekan apakah tanggal lahir yang diinput lebih besar dari tanggal hari ini. Jika ya, maka kode akan menggeser bulan ke bulan sebelumnya dan menambahkan jumlah hari pada bulan tersebut ke tanggal hari ini. Misalnya, jika tanggal lahir adalah 31 Januari dan hari ini adalah 1 Februari, maka kode akan menggeser bulan ke Desember dan menambahkan 31 hari pada tanggal hari ini.
Setelah itu, kode melakukan pengecekan apakah bulan lahir lebih besar dari bulan saat ini. Jika ya, maka kode akan mengurangi satu tahun dari tahun saat ini dan menambahkan 12 bulan pada bulan saat ini.
Kode kemudian menghitung selisih tahun, bulan, dan hari antara tanggal lahir dan tanggal saat ini.
Untuk menghindari nilai negatif pada bulan dan hari, kode melakukan pengecekan apakah nilai bulan atau hari kurang dari nol. Jika ya, maka kode akan menggeser satu tahun ke belakang pada nilai tahun dan menambahkan 12 pada nilai bulan. Selain itu, kode juga akan menggeser nilai hari menjadi jumlah hari pada bulan sebelumnya.
Terakhir, nilai tahun, bulan, dan hari yang telah dihitung akan ditampilkan pada halaman web melalui elemen HTML yang ditentukan oleh ID.