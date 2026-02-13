#!/bin/bash

CSV="signatures.csv"
HTML="signatures.html"

cat <<'HEAD' >"$HTML"
<p>Agradecemos profundamente a todas las personas que han firmado y respaldado esta petición. Su apoyo expresa un compromiso claro con el fortalecimiento de la ciencia colombiana, la labor editorial y el derecho del país a contar con un sistema de publicaciones científicas sólido, transparente y alineado con estándares internacionales. Cada firma es una voz que exige diálogo, visibilidad y condiciones justas para editores e investigadores, y constituye un llamado legítimo al Ministerio de Ciencia, Tecnología e Innovación para reactivar <i>Publindex</i> y garantizar el desarrollo y la competitividad internacional de la ciencia nacional.</p>
<table id='signatures'>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Institución</th>
      <th>Ciudad</th>
      <th>País</th>
      <th>Correo electrónico</th>
    </tr>
  </thead>
  <tbody>
HEAD

tail -n +2 "$CSV" | while IFS=',' read -r name afiliation city country email; do
  cat <<EOF >>"$HTML"
    <tr>
      <td>$name</td>
      <td>$afiliation</td>
      <td>$city</td>
      <td>$country</td>
      <td>$email</td>
    </tr>
EOF
done

cat <<'TAIL' >>"$HTML"
  </tbody>
</table>
TAIL
