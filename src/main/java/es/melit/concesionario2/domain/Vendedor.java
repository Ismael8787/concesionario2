package es.melit.concesionario2.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Vendedor.
 */
@Entity
@Table(name = "vendedor")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Vendedor implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @NotNull
    @Column(name = "apellido_1", nullable = false)
    private String apellido1;

    @Column(name = "apellido_2")
    private String apellido2;

    @NotNull
    @Column(name = "fecha_nacimiento", nullable = false)
    private LocalDate fechaNacimiento;

    @NotNull
    @Column(name = "fecha_contratacion", nullable = false)
    private LocalDate fechaContratacion;

    @NotNull
    @Column(name = "fecha_baja", nullable = false)
    private LocalDate fechaBaja;

    @NotNull
    @Size(max = 9)
    @Column(name = "dni", length = 9, nullable = false)
    private String dni;

    @Column(name = "comision")
    private double comision = 0.10;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Vendedor id(Long id) {
        this.id = id;
        return this;
    }

    public String getNombre() {
        return this.nombre;
    }

    public Vendedor nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido1() {
        return this.apellido1;
    }

    public Vendedor apellido1(String apellido1) {
        this.apellido1 = apellido1;
        return this;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return this.apellido2;
    }

    public Vendedor apellido2(String apellido2) {
        this.apellido2 = apellido2;
        return this;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public LocalDate getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    public Vendedor fechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
        return this;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public LocalDate getFechaContratacion() {
        return this.fechaContratacion;
    }

    public Vendedor fechaContratacion(LocalDate fechaContratacion) {
        this.fechaContratacion = fechaContratacion;
        return this;
    }

    public void setFechaContratacion(LocalDate fechaContratacion) {
        this.fechaContratacion = fechaContratacion;
    }

    public LocalDate getFechaBaja() {
        return this.fechaBaja;
    }

    public Vendedor fechaBaja(LocalDate fechaBaja) {
        this.fechaBaja = fechaBaja;
        return this;
    }

    public void setFechaBaja(LocalDate fechaBaja) {
        this.fechaBaja = fechaBaja;
    }

    public String getDni() {
        return this.dni;
    }

    public Vendedor dni(String dni) {
        this.dni = dni;
        return this;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Vendedor)) {
            return false;
        }
        return id != null && id.equals(((Vendedor) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Vendedor{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", apellido1='" + getApellido1() + "'" +
            ", apellido2='" + getApellido2() + "'" +
            ", fechaNacimiento='" + getFechaNacimiento() + "'" +
            ", fechaContratacion='" + getFechaContratacion() + "'" +
            ", fechaBaja='" + getFechaBaja() + "'" +
            ", dni='" + getDni() + "'" +
            "}";
    }
}
