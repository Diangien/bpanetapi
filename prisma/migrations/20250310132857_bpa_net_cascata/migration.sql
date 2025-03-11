-- DropForeignKey
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_n_Idcliente_fkey";

-- DropForeignKey
ALTER TABLE "conta" DROP CONSTRAINT "conta_n_Idcliente_fkey";

-- DropForeignKey
ALTER TABLE "dispositivo" DROP CONSTRAINT "dispositivo_n_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "trasacao" DROP CONSTRAINT "trasacao_n_contaorigem_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_n_Idconta_fkey";

-- AlterTable
ALTER TABLE "conta" ADD COLUMN     "t_area" TEXT,
ADD COLUMN     "t_local" TEXT;

-- AddForeignKey
ALTER TABLE "Telefone" ADD CONSTRAINT "Telefone_n_Idcliente_fkey" FOREIGN KEY ("n_Idcliente") REFERENCES "cliente"("n_Idcliente") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_n_Idconta_fkey" FOREIGN KEY ("n_Idconta") REFERENCES "conta"("n_Idconta") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conta" ADD CONSTRAINT "conta_n_Idcliente_fkey" FOREIGN KEY ("n_Idcliente") REFERENCES "cliente"("n_Idcliente") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "dispositivo" ADD CONSTRAINT "dispositivo_n_id_usuario_fkey" FOREIGN KEY ("n_id_usuario") REFERENCES "usuario"("n_id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trasacao" ADD CONSTRAINT "trasacao_n_contaorigem_fkey" FOREIGN KEY ("n_contaorigem") REFERENCES "conta"("n_Idconta") ON DELETE CASCADE ON UPDATE NO ACTION;
