<?php
require_once('tcpdf/config/lang/eng.php');
require_once('tcpdf/tcpdf.php');

$txt = isset($_POST["txt"]) ? $_POST["txt"] : "";

if ($txt) {
	$filename = "dmohs" . time() . ".pdf";
	$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
	$pdf->AddPage();
	$pdf->Write(5, $txt, '', 0, '', false, 0, false, false, 0);
	$pdf->Output('files/' . $filename, 'F');
	echo $filename;
} else {
	echo '';
}
?>
