package repository;

import model.User;
import org.springframework.data.repository.CrudRepository;

public interface TwitterRepository extends CrudRepository<User, Long> {
   User findByEmail(String email);
}
