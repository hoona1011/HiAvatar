import styled from 'styled-components'
export const Landing = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
`
export const section1Container = styled.div`
  height: 70rem;
  display: flex;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://user-images.githubusercontent.com/91241596/195276806-8be2a0a8-a859-4a86-b1c9-e2bef6444bbf.png');
`
export const section1Inner = styled.div`
  width: 120rem;
  position: relative;
  top: 20rem;
  left: 15rem;
`
export const section2Container = styled.div`
  height: 75rem;
  display: flex;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://user-images.githubusercontent.com/91241596/195172289-452e889e-c60a-41e4-aa59-e25dee5e21ca.png');
`
export const section2Inner = styled.div`
  width: 120rem;
  color: white;
  position: relative;
  top: 27rem;
  left: 65rem;
`
export const section3Container = styled.div`
  height: 75rem;
  display: flex;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://user-images.githubusercontent.com/91241596/195172001-1398368e-5f72-4c9e-b832-f3fddd20a8c7.png');
`
export const section3Inner = styled.div`
  width: 120rem;
  text-align: center;
  position: relative;
  top: 8rem;
`
export const section3Image = styled.div`
  position: relative;
  top: 76px;
`
export const section4Container = styled.div`
  height: 75rem;
  display: flex;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://user-images.githubusercontent.com/91241596/195278519-cf3fda40-4e05-44f0-9964-e90732420a30.png');
`
export const section4Inner = styled.div`
  width: 120rem;
  position: relative;
  top: 480px;
  left: 480px;
`
export const wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`
export const TopText = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.3rem;
  margin-bottom: 1.6rem;
`
export const MidText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 2.4rem;
  /* margin-right: 84px; */
`
export const MidText4 = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 2.4rem;
  margin-right: 84px;
`
export const Button = styled.button`
  width: 16rem;
  height: 4.8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue70};
  color: ${({ theme }) => theme.palette.white};
`
