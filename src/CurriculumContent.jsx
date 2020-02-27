import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const CurriculumContent = () => {
    return (
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Hello World</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto vero nisi ipsam quisquam nam. Reprehenderit, quas. Unde autem ad molestias, non fuga eos vitae est doloremque repellendus odit voluptate.</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}


export default CurriculumContent