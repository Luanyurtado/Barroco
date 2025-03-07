package com.example.gameapi.repository;

import com.example.gameapi.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface responsável pelo acesso ao banco de dados.
 * JpaRepository já fornece métodos como save(), findById(), findAll(), delete().
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Métodos customizados podem ser adicionados aqui se necessário
}
