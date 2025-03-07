package com.example.gameapi.controller;

import com.example.gameapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador para gerenciar as requisições relacionadas ao usuário.
 */
@RestController  // Define que esta classe é um controlador REST
@RequestMapping("/api/usuario")  // Define a URL base para os endpoints desta API
@CrossOrigin(origins = "*")  // Permite requisições de qualquer origem (útil para o frontend)
public class UsuarioController {

    private final UsuarioService usuarioService;

    // Construtor para injetar a dependência de UsuarioService
    @Autowired  
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    /**
     * Endpoint para salvar o nome do usuário.
     * @param usuario O objeto Usuario enviado no corpo da requisição.
     * @return O mesmo objeto Usuario que foi salvo.
     */
    @PostMapping  // Define que este método responde a requisições POST
    public Usuario salvarNome(@RequestBody Usuario usuario) {
        usuarioService.salvarNome(usuario.getNome());  // Chama o serviço para salvar o nome
        return usuario;  // Retorna o usuário salvo
    }

    /**
     * Endpoint para obter o nome do usuário.
     * @return Um objeto Usuario com o nome recuperado.
     */
    @GetMapping  // Define que este método responde a requisições GET
    public Usuario obterNome() {
        return new Usuario(usuarioService.obterNome());  // Retorna o nome salvo no serviço
    }

    /**
     * Classe interna para representar o usuário.
     */
    public static class Usuario {
        private String nome;

        // Construtor padrão necessário para o Spring
        public Usuario() {}

        // Construtor para criar um objeto Usuario com o nome
        public Usuario(String nome) {
            this.nome = nome;
        }

        // Métodos getters e setters para o nome
        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }
    }
}
