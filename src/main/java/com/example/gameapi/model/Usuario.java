package com.example.gameapi.model;

import jakarta.persistence.*;

/**
 * Entidade que representa um usuário no banco de dados.
 */
@Entity  // Indica que essa classe será uma tabela no banco
@Table(name = "usuarios")  // Define o nome da tabela no banco de dados
public class Usuario {

    @Id  // Define o campo como chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Gera ID automaticamente
    private Long id;

    @Column(nullable = false)  // Indica que esse campo não pode ser nulo
    private String nome;

    // Construtor padrão necessário para o Hibernate
    public Usuario() {}

    // Construtor para facilitar a criação de objetos
    public Usuario(String nome) {
        this.nome = nome;
    }

    // Métodos Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
