import { InjectionToken } from "@angular/core";
import { CursosService } from "./services/cursos.service"
import { UsuarioService } from "./services/usuario.service"
import { Usuario } from './models/usuario';

export interface Configuracion{
    // servicios: {
        cursos: CursosService,
        Usuario: UsuarioService
    // }
};

// export const config: Configuracion = {
    // servicios: {
    //     cursos: new CursosService(),
    //     Usuario: new UsuarioService()
    // // }
// };

export const token = new InjectionToken<Configuracion>('configuracion')