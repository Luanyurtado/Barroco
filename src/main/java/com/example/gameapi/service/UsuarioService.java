package com.example.gameapi.service;

import org.springframework.stereotype.Service;

/**
 * Classe de serviço para gerenciar o nome do usuário.
 */
@Service  // Marca esta classe como um serviço, que pode ser injetado em outras partes da aplicação
public class UsuarioService {

    // Variável para armazenar o nome do usuário
    private String nomeUsuario = "";

    /**
     * Método para salvar o nome do usuário.
     *  O nome do usuário a ser salvo.
     */
    public void salvarNome(String nome) {
        this.nomeUsuario = nome;  // Salva o nome na variável 'nomeUsuario'
    }

    /**
     * Método para obter o nome do usuário.
     * @return O nome do usuário salvo.
     */
    public String obterNome() {
        return this.nomeUsuario;  // Retorna o nome do usuário
    }
}
