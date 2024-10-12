import { InfoPageWrapper } from "./InfoPageWrapper"

export const ImprintPage = () => {
  return (
    <InfoPageWrapper header="Impressum">
      <div>
        <h2>Moritz Hipper</h2>
        <p>Augustenstraße 118</p>
        <p>70197, Stuttgart</p>
        <p>Germany</p>
      </div>
      <div className="mt-m">
        <h2>Kontakt</h2>
        <p>E-Mail: info@moritzhipper.com</p>
      </div>
    </InfoPageWrapper>
  )
}
