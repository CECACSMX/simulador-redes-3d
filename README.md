# Simulador de Redes 3D · SMX

Simulador de redes en 3D para el ciclo SMX: equipos, cableado con validación de puertos
(código de colores TIA-606), ARP, ICMP, tablas MAC y de rutas, y modo simulación paso a paso.

- Servicios DHCP, DNS y HTTP en el servidor, navegador web en los equipos.
- Símbolo del sistema en los PC: ipconfig, ping, tracert, nslookup, arp.
- CLI de Cisco IOS en routers y switches (también por cable de consola): interfaces, rutas,
  DHCP en el router, ip helper-address, contraseñas, show running-config…
- VLAN, troncales 802.1Q, router-on-a-stick, SVI en el switch de capa 3 y Spanning Tree.
- Wi-Fi con SSID, seguridad abierta/WEP/WPA2-PSK, 4-way handshake e interferencia cocanal.
- Guardar y abrir la red (.json), notas sobre el plano y modo actividad con autocorrección.

**Abrir:** https://cecacsmx.github.io/simulador-redes-3d/ (se puede instalar como aplicación y funciona sin conexión).

Este repositorio solo contiene la versión publicada; se genera con `publicar.py`.

## Licencia

© 2026 Angel Ortiz. Publicado con licencia MIT (ver `LICENSE`): se puede usar, copiar,
modificar y redistribuir libremente siempre que se conserve el aviso de autoría.

Incluye Three.js 0.160 (licencia MIT, ver `vendor/three/LICENSE`).

## Aviso

Este simulador está inspirado en Cisco Packet Tracer, pero es un proyecto independiente:
no está afiliado, patrocinado ni respaldado por Cisco Systems. Cisco, Cisco IOS y
Packet Tracer son marcas de Cisco Systems, Inc.; se citan solo como referencia.
