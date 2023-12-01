export default function UserInput({ onChange, userInput }){

    return (<section id="user-input">
        <div class="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required 
                value={userInput.initialInvestment}
                onChange={(event) => onChange('initialInvestment', event.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required 
                value={userInput.annualInvestment}
                onChange={(event) => onChange('annualInvestment', event.target.value)}
                />            
                </p>
            <p>
                <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(event) => onChange('expectedReturn', event.target.value)}
                />               
                </p>
            <p>
                <label>Duration Investment</label>
                <input type="number" required 
                value={userInput.durationInvestment}
                onChange={(event) => onChange('durationInvestment', event.target.value)}
                />   
            </p>
        </div>
    </section>
    )
}