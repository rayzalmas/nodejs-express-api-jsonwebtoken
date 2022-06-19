const router = require('express').Router();
const authMiddleware = require("../middleware/auth-middleware");
const { auth } = require('../controllers');
const { karyawan } = require('../controllers');

// GET localhost:8080/karyawan => Get all data
router.get('/karyawan/', karyawan.getDataKaryawan);
// GET localhost:8080/karyawan/2 => Get data by id
router.get('/karyawan/:id', authMiddleware, karyawan.getDataKaryawanByID);
// POST localhost:8080/karyawan/add => Add new data
router.post('/karyawan/add', authMiddleware, karyawan.addDataKaryawan);
// POST localhost:8080/karyawan/edit/2 => Edit data by id
router.post('/karyawan/edit', authMiddleware, karyawan.editDataKaryawan);
// POST localhost:8080/karyawan/hapus/2 => Delete data by id
router.post('/karyawan/delete', authMiddleware, karyawan.deleteDataKaryawan);

router.post('/auth/login', auth.login);
router.post('/auth/register', auth.register);
router.post('/auth/token', auth.refreshToken);
router.post('/auth/delRefreshToken', auth.deleteToken);

module.exports = router;