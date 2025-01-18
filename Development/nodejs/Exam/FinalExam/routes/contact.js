const express = require('express');
const Contact = require('../model/Contact');

const Router = express.Router();

Router.get('/contacts', async (req, res) => {
    const contacts = await Contact.find({});
    res.render('show',{contacts});
});

Router.post('/contacts', async (req, res) => {
    const {contactName, phoneNo, email, imageUrl} = req.body;
    console.log(req.body);
    const newContact = new Contact({contactName, phoneNo, email, imageUrl});
    newContact.save();
    res.redirect('/contacts');
})


Router.get('/contact/new', (req, res) => {
    res.render('new');
})

Router.get('/contact/:id/edit', async (req, res) => {
    const id = req.params.id;

    const contact = await Contact.findById(id);

    res.render('edit', {contact});
})

Router.post('/contact/:id', async(req, res) => {
    const id = req.params.id;
    const {contactName, phoneNo, email, imageUrl} = req.body;
    const editContact  = await Contact.findByIdAndUpdate(id, {contactName, phoneNo, email, imageUrl});
    res.redirect('/contacts');
})

Router.post('/contact/:id/delete', async (req, res) => {
    const id = req.params.id;
    const deleteContact = await Contact.findByIdAndDelete(id);
    res.redirect('/contacts');
})

module.exports = Router;