import { button } from 'bootstrap';
import styled from 'styled-components';


const Link = () => {
  return <div>
  <Header class=" ">
    <ul class="nav nav-pills nav-fill">
   
  <li class="nav-item" role="presentation">
    <Button style={{margin:'10px'}} class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</Button>
  </li>
  <li class="nav-item" role="presentation">
    <Button style={{margin:'10px'}} class="nav-link"  id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Button>
  </li> 
  <li class="nav-item" role="presentation">
    <Button style={{margin:'10px'}} class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</Button>
  </li>

    </ul>
  
  </Header>
  <Div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">..1.</div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..2.</div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">..3.</div>
  </Div>
</div>;
};

const Button = styled.button`
    font-size:20px;
    background-color:white;
    border:none;
    border-radius:15px;
    &:hover,
  &:focus {
    color: red;
  }
  &:active {
    color: red;
  }
   

`

const Header = styled.div`
margin-top:52px;
justify-content:center;
display:flex;
`

const Div = styled.div`
margin-top:40px;
    display: flex;
    justify-content:center;
`

export default Link;
