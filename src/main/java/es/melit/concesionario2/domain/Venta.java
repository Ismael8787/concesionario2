package es.melit.concesionario2.domain;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Venta.
 */
@Entity
@Table(name = "venta")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Venta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "fecha", nullable = false)
    private LocalDate fecha;

    @NotNull
    @Column(name = "precio_total", nullable = false)
    private Double precioTotal;

    @ManyToOne(optional = false)
    @NotNull
    private Comprador comprador;

    @ManyToOne(optional = false)
    @NotNull
    private Vendedor vendedor;

    @Column(name = "num_factura")
    private String numFactura;

    @Column(name = "coche_id")
    private Long cocheId;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Venta id(Long id) {
        this.id = id;
        return this;
    }

    public LocalDate getFecha() {
        return this.fecha;
    }

    public Venta fecha(LocalDate fecha) {
        this.fecha = fecha;
        return this;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Double getPrecioTotal() {
        return this.precioTotal;
    }

    public Venta precioTotal(Double precioTotal) {
        this.precioTotal = precioTotal;
        return this;
    }

    public void setPrecioTotal(Double precioTotal) {
        this.precioTotal = precioTotal;
    }

    public Comprador getComprador() {
        return this.comprador;
    }

    public Venta comprador(Comprador comprador) {
        this.setComprador(comprador);
        return this;
    }

    public void setComprador(Comprador comprador) {
        this.comprador = comprador;
    }

    public Vendedor getVendedor() {
        return this.vendedor;
    }

    public Venta vendedor(Vendedor vendedor) {
        this.setVendedor(vendedor);
        return this;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }

    public String getNumFactura() {
        return numFactura;
    }

    public void setNumFactura(String numFactura) {
        this.numFactura = numFactura;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    public Long getCocheId() {
        return cocheId;
    }

    public void setCocheId(Long cocheId) {
        this.cocheId = cocheId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Venta)) {
            return false;
        }
        return id != null && id.equals(((Venta) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Venta{" +
            "id=" + getId() +
            ", fecha='" + getFecha() + "'" +
            ", precioTotal=" + getPrecioTotal() +
            ", precioTotal=" + getNumFactura() +
            ", precioTotal=" + getCocheId() +
            "}";
    }
}
