package ec.edu.epn.laboratorios.contoller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.edu.epn.laboratorios.model.DetalleOrden;
import ec.edu.epn.laboratorios.service.DetalleOrdenService;

@RestController
@RequestMapping("/DetalleOrden")
public class DetalleOrdenController {
	
	@Autowired
	private DetalleOrdenService service;

	@GetMapping
	public List<DetalleOrden> getListaDetalle() {
		return service.getListaDetalle();
	}
}
