const auth = require("../middleware/auth-middleware");

const router = require('express').Router();
const { karyawan } = require('../controllers');

// GET localhost:8080/karyawan => Get all data
router.get('/karyawan/', karyawan.getDataKaryawan);

// GET localhost:8080/karyawan/2 => Get data by id
router.get('/karyawan/:id', auth, karyawan.getDataKaryawanByID);

// POST localhost:8080/karyawan/add => Add new data
router.post('/karyawan/add', auth, karyawan.addDataKaryawan);

// POST localhost:8080/karyawan/edit/2 => Edit data by id
router.post('/karyawan/edit', auth, karyawan.editDataKaryawan);

// POST localhost:8080/karyawan/hapus/2 => Delete data by id
router.post('/karyawan/delete', auth, karyawan.deleteDataKaryawan);

module.exports = router;