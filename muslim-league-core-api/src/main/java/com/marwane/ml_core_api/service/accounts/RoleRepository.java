package com.marwane.ml_core_api.service.accounts;

import com.marwane.ml_core_api.model.Role;
import com.marwane.ml_core_api.model.RoleName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role,Integer> {
    Optional<Role> findByName(RoleName roleName);
}
