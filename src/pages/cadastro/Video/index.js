import React from 'react';
import PageDefalt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefalt>
            <h1>Cadastro deVideo</h1>

            <Link to="/cadastro/categoria">
                Cadastro Categoria
            
            </Link>
        </PageDefalt>
    )
}

export default CadastroVideo;