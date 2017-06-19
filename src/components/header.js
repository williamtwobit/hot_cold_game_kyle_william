import React from 'react';
import Nav from './nav.js';
import Modal from './modal.js';

export default function Header() {
    return (
        <header>
            <Nav />
            <Modal />
            <h1> HOT OR COLD </h1>
        </header>
    );
}