package mk.ukim.finki.emt.emtlab1.controller;

import mk.ukim.finki.emt.emtlab1.model.enumerations.BookType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @GetMapping
    List<BookType> getCategories() {
        return Arrays.stream(BookType.values()).toList();
    }
}
