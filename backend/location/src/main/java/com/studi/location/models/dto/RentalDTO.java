package com.studi.location.models.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RentalDTO {
    Long property;
    Long tenant;
    Boolean deposit;

    public RentalDTO(Long property, Long tenant, Boolean deposit) {
        this.property = property;
        this.tenant = tenant;
        this.deposit = deposit;
    }

    public RentalDTO() {}
}
