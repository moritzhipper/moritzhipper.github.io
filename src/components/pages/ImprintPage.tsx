import { InfoPage } from "./InfoPage"

export const ImprintPage = () => {
  return (
    <InfoPage header="Impressum">
      <div>
        <h2>Moritz Hipper</h2>
        <p>Augustenstraße 118</p>
        <p>70197, Stuttgart</p>
        <p>Germany</p>
      </div>
      <div className="mt-s">
        <h2>Kontakt</h2>
        <p>E-Mail: info@moritzhipper.com</p>
      </div>
    </InfoPage>
  )
}
