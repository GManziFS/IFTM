package com.example.matematica;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/matematica")
public class MatematicaController {

    @GetMapping("/soma")
    public ResponseEntity<Map<String, Integer>> soma(@RequestParam int a, @RequestParam int b) {
        Map<String, Integer> resultado = new HashMap<>();
        resultado.put("resultado", a + b);
        return ResponseEntity.ok(resultado);
    }

    @GetMapping("/fatorial")
    public ResponseEntity<Map<String, Integer>> fatorial(@RequestParam int n) {
        if (n < 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("erro", "O número não pode ser negativo"));
        }
        int resultado = 1;
        for (int i = 1; i <= n; i++) {
            resultado *= i;
        }
        return ResponseEntity.ok(Map.of("resultado", resultado));
    }

    @PostMapping("/media")
    public ResponseEntity<Map<String, Double>> calcularMedia(@RequestBody Map<String, List<Integer>> request) {
        List<Integer> valores = request.get("valores");

        if (valores == null || valores.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("erro", "A lista não pode estar vazia"));
        }

        double media = valores.stream().mapToInt(Integer::intValue).average().orElse(0);
        return ResponseEntity.ok(Map.of("resultado", media));
    }

    @PostMapping("/soma-linhas")
    public ResponseEntity<Map<String, List<Integer>>> somaLinhas(@RequestBody Map<String, List<List<Integer>>> request) {
        List<List<Integer>> matriz = request.get("matriz");

        if (matriz == null || matriz.isEmpty() || !matriz.stream().allMatch(linha -> linha.size() == matriz.get(0).size())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("erro", "A matriz não pode estar vazia e todas as linhas devem ter o mesmo tamanho"));
        }

        List<Integer> somaLinhas = matriz.stream()
                                         .map(linha -> linha.stream().mapToInt(Integer::intValue).sum())
                                         .collect(Collectors.toList());
        return ResponseEntity.ok(Map.of("resultado", somaLinhas));
    }
}