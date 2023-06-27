import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import IConsulta from "../../types/IConsulta";

const Tabela = ({ consultas }: { consultas: IConsulta[] | null }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Horario</TableCell>
              <TableCell>Profissional</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Modalidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((linha) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {linha.data}
                  </TableCell>
                  <TableCell>{linha.horario}</TableCell>
                  <TableCell>{linha.profissional[0].nome}</TableCell>
                  <TableCell>{linha.profissional[0].especialidade}</TableCell>
                  <TableCell>{linha.paciente}</TableCell>
                  <TableCell>{linha.modalidade}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Tabela;
