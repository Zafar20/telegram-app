import ZodiacsItem from "./ZodiacsItem"


const Zodiacs = ({zodiacs}) => {
  return (
    <>
        <div className="zodiacs__list">
            {zodiacs && zodiacs.map((item) => (
                <ZodiacsItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    </>
  )
}

export default Zodiacs